(function(root){
 'use strict';
 const M=typeof module!=='undefined'?require('./motifs.js'):root.HexMotifs;
 const E=typeof module!=='undefined'?require('./engine.js'):root.HexEngine;
 const object=value=>value&&typeof value==='object'&&!Array.isArray(value);
 function encode(save){return JSON.stringify({app:'luma-hex',format:1,catalog:M.motifs.map(m=>m.id),savedAt:new Date().toISOString(),save},null,2);}
 function decode(text){
  if(typeof text!=='string'||text.length>1000000)throw Error('Die Sicherung ist zu groß.');
  let source;try{source=JSON.parse(text);}catch{throw Error('Das ist keine lesbare Sicherungsdatei.');}
  if(!object(source)||source.app!=='luma-hex'||source.format!==1||!object(source.save)||!Array.isArray(source.catalog))throw Error('Das ist keine unterstützte Luma-Hex-Sicherung.');
  if(source.catalog.length>M.motifs.length||!source.catalog.every((id,n)=>id===M.motifs[n].id))throw Error('Diese Sicherung gehört zu einer anderen Rätselsammlung.');
  const raw=source.save,count=source.catalog.length,valid=n=>Number.isInteger(n)&&n>=0&&n<count;
  if(!valid(raw.index)||!Array.isArray(raw.done)||!raw.done.every(valid)||!object(raw.attempts))throw Error('Der Spielstand enthält ungültige Rätselnummern.');
  const attempts={};
  for(const [n,attempt] of Object.entries(raw.attempts)){
   if(String(Number(n))!==n||!valid(Number(n))||!object(attempt)||!object(attempt.placements))throw Error('Ein gespeichertes Rätsel ist ungültig.');
   const data=E.level(Number(n)),placements={};
   for(const [id,at] of Object.entries(attempt.placements)){
    if(String(Number(id))!==id||!E.fits(data,placements,Number(id),at))throw Error('Ein gespeichertes Teil liegt außerhalb des Spielfelds oder überlappt.');
    placements[id]=[...at];
   }
   attempts[n]={placements,hints:Number.isInteger(attempt.hints)&&attempt.hints>=0?attempt.hints:0,testUsed:attempt.testUsed===true};
  }
  const records={};
  if(object(raw.records))for(const [n,value] of Object.entries(raw.records))if(valid(Number(n))&&object(value)&&['own','hint','test','legacy'].includes(value.mode))records[n]={mode:value.mode,hints:Number.isInteger(value.hints)&&value.hints>=0?value.hints:0};
  return {index:raw.index,done:[...new Set(raw.done)],attempts,records,...(Number.isFinite(raw.dragGap)?{dragGap:Math.max(24,Math.min(100,raw.dragGap))}:{}),sound:raw.sound!==false,vibration:raw.vibration!==false,introSeen:raw.introSeen===true};
 }
 const api={encode,decode};if(typeof module!=='undefined')module.exports=api;else root.HexSave=api;
})(typeof window!=='undefined'?window:globalThis);
