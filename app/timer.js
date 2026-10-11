(function(root){'use strict';const LIMIT=365*24*60*60*1000;
const duration=n=>Number.isFinite(n)&&n>=0&&n<=LIMIT;
function normalize(raw){return raw&&typeof raw==='object'&&duration(raw.elapsedMs)?{elapsedMs:raw.elapsedMs,valid:raw.valid===true,assisted:raw.assisted===true,finished:raw.finished===true,hintCount:Number.isInteger(raw.hintCount)&&raw.hintCount>=0?raw.hintCount:0}:null;}
function bests(raw,count){const out={};if(raw&&typeof raw==='object')for(const [id,n] of Object.entries(raw))if(String(Number(id))===id&&Number.isInteger(+id)&&+id>=0&&+id<count&&duration(n)&&n>0)out[id]=n;return out;}
function create(raw=null,valid=false,now=()=>typeof performance!=='undefined'?performance.now():Date.now()){
 const state=normalize(raw)||{elapsedMs:0,valid:!!valid,assisted:false,finished:false,hintCount:0};let since=null;
 function pause(){if(since!==null){state.elapsedMs=Math.min(LIMIT,state.elapsedMs+Math.max(0,now()-since));since=null;}}
 return {start(){if(since===null&&!state.finished)since=now();},pause,read(){return Math.min(LIMIT,state.elapsedMs+(since===null?0:Math.max(0,now()-since)));},snapshot(){pause();return {...state};},invalidate(){state.valid=false;},assist(kind='test'){if(kind==='hint')state.hintCount++;else state.assisted=true;},finish(){pause();const fresh=!state.finished;state.finished=true;return {...state,fresh};},get finished(){return state.finished;},get valid(){return state.valid;}};
}
function format(ms){const secs=Math.floor(Math.max(0,ms)/1000),h=Math.floor(secs/3600),m=Math.floor(secs%3600/60),s=String(secs%60).padStart(2,'0');return h?h+':'+String(m).padStart(2,'0')+':'+s:Math.floor(secs/60)+':'+s;}
const api={create,normalize,bests,format};if(typeof module!=='undefined')module.exports=api;else root.HexTimer=api;})(typeof window!=='undefined'?window:globalThis);