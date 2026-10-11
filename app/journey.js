(function(root){'use strict';
function valid(order,count){return Array.isArray(order)&&order.length===count&&new Set(order).size===count&&order.every(n=>Number.isInteger(n)&&n>=0&&n<count);}
const families={ribbons:'Bänder und Bögen',fans:'Fächer und Kanten',forks:'Verzweigte Wege',bridges:'Brücken',islands:'Verbundene Inseln',channels:'Schmale Wege',facets:'Ecken und Kanten',notches:'Einbuchtungen',arches:'Bögen',windows:'Fenster',terraces:'Stufen',anchors:'Feste Anker'};
function plan(saved,original,meta,motifs){
 if(valid(saved.journeyOrder,original.length))return [...saved.journeyOrder];
 if(Array.isArray(saved.journeyOrder)&&valid(saved.journeyOrder,saved.journeyOrder.length)&&saved.journeyOrder.length<original.length){const known=new Set(saved.journeyOrder);return [...saved.journeyOrder,...original.filter(n=>!known.has(n))];}
 const position=Object.fromEntries(original.map((n,i)=>[n,i])),played=[...(saved.done||[]),...Object.keys(saved.attempts||{}).map(Number)].filter(n=>position[n]!==undefined);
 if(saved.introSeen&&position[saved.index]!==undefined)played.push(saved.index);
 const prefix=played.length?Math.min(original.length,Math.ceil((Math.max(...played.map(n=>position[n]))+1)/10)*10):0;
 const output=original.slice(0,prefix),used=new Set(output);let lastFamily='';
 for(let start=prefix;start<original.length;start+=10){const stage=meta[original[start]].stage,available=original.filter(n=>!used.has(n)&&meta[n].stage===stage),stageCh=Math.floor(start/10),target=meta[original[Math.min(start+4,original.length-1)]].score,chosen=[];
 const add=n=>{if(n!==undefined&&!used.has(n)){used.add(n);chosen.push(n);}};
 const score=n=>Math.abs(meta[n].score-target);
 const remainCh=Math.max(1,Math.ceil(available.length/10)),figures=available.filter(n=>motifs[n].kind==='figure').sort((a,b)=>score(a)-score(b)||a-b),figureCount=Math.min(2,Math.ceil(figures.length/remainCh));
 // Keep the first few moves simple, then introduce a recognisable outline.
 if(start===0)original.slice(0,3).forEach(add);
 const remaining=()=>available.filter(n=>!used.has(n)&&motifs[n].kind!=='figure');
 const anchors=remaining().filter(n=>meta[n].anchors>0),branches=remaining().filter(n=>meta[n].tags.includes('Schmale Verbindungen'));
 let focus=[];
 if(stage!=='arrive'&&stageCh%4===1&&anchors.length>=6)focus=anchors;
 else if(stageCh%6===2&&branches.length>=6)focus=branches;
 else {const counts=new Map();for(const n of remaining()){const f=motifs[n].family;if(f)counts.set(f,(counts.get(f)||0)+1);}const options=[...counts].filter(([f,count])=>count>=6&&f!==lastFamily).map(([f,count])=>({family:f,count,distance:Math.min(...remaining().filter(n=>motifs[n].family===f).map(score))})).sort((a,b)=>a.distance-b.distance||b.count-a.count||a.family.localeCompare(b.family));if(options.length){lastFamily=options[0].family;focus=remaining().filter(n=>motifs[n].family===lastFamily);}}
 focus.sort((a,b)=>score(a)-score(b)||a-b).slice(0,Math.min(6,10-chosen.length-figureCount)).forEach(add);
 const reserved=figures.slice(0,figureCount);
 while(chosen.length<10-reserved.length){const pool=available.filter(n=>!used.has(n)&&!reserved.includes(n)),prev=chosen.at(-1);pool.sort((a,b)=>score(a)+(prev!==undefined&&motifs[a].family===motifs[prev].family?2:0)-score(b)-(prev!==undefined&&motifs[b].family===motifs[prev].family?2:0)||a-b);if(!pool.length)throw Error('Incomplete chapter');add(pool[0]);}
 reserved.forEach(add);
 // Put the surprise before the end rather than leaving every motif as a finale.
 if(reserved.length){const figure=chosen.pop();chosen.splice(Math.min(6,chosen.length),0,figure);}
 output.push(...chosen);
 }
 if(!valid(output,original.length))throw Error('Invalid journey');return output;
}
function profile(ids,meta,motifs){const entries=ids.map(n=>meta[n]),anchors=entries.filter(m=>m.anchors>0).length,branches=entries.filter(m=>m.tags.includes('Schmale Verbindungen')).length,figures=ids.filter(n=>motifs[n].kind==='figure').length,counts=new Map();for(const n of ids){const f=motifs[n].family;if(f)counts.set(f,(counts.get(f)||0)+1);}const dominant=[...counts].sort((a,b)=>b[1]-a[1])[0];let title='Freie Konturen',detail='Wechselnde Umrisse';if(anchors>=5){title='Feste Anker';detail=anchors+' Rätsel mit Ankern';}else if(branches>=5){title='Verzweigte Wege';detail='Schmale Verbindungen';}else if(dominant&&dominant[1]>=5){title=families[dominant[0]]||title;detail=dominant[1]+' Rätsel mit diesem Schwerpunkt';}else if(figures>=2){title='Bekannte Konturen';detail=figures+' erkennbare Motive';}const min=Math.min(...entries.map(m=>m.pieces)),max=Math.max(...entries.map(m=>m.pieces));return {title,detail,pieces:min===max?min+' Teile':min+'–'+max+' Teile',anchors,branches,figures};}
const api={valid,plan,profile};if(typeof module!=='undefined')module.exports=api;else root.HexJourney=api;
})(typeof window!=='undefined'?window:globalThis);
