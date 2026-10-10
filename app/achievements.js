(function(root){'use strict';
const definitions=[
['spark','Der erste Funke','Das erste Rätsel lösen.','solved',1,'spark'],
['flow','Im Fluss','10 verschiedene Rätsel lösen.','solved',10,'wave'],
['shape','Formgefühl','50 verschiedene Rätsel lösen.','solved',50,'bloom'],
['universe','Ein kleines Universum','100 verschiedene Rätsel lösen.','solved',100,'orbit'],
['horizon','Weiter Horizont','250 verschiedene Rätsel lösen.','solved',250,'sun'],
['constellation','Sternenbild','500 verschiedene Rätsel lösen.','solved',500,'stars'],
['journey','Eine große Reise','1.200 verschiedene Rätsel lösen.','solved',1200,'crown'],
['clear','Freier Kopf','10 verschiedene Rätsel ohne Hinweis lösen.','own',10,'leaf'],
['knot','Knoten gelöst','Ein Rätsel aus Meistern oder Herausforderung lösen.','hard',1,'knot'],
['curious','Neugier geweckt','25 verschiedene Lesemomente sammeln.','reading',25,'book'],
['reader','Geschichtensammler','100 verschiedene Lesemomente sammeln.','reading',100,'bookstar']
].map(([id,name,description,metric,target,icon])=>({id,name,description,metric,target,icon}));
function evaluate(done,records={},memory={},byIndex={}){const real=[...new Set(done)].filter(n=>['own','hint'].includes(records[n]?.mode)||!records[n]||records[n].mode==='legacy');const stats={solved:real.length,own:real.filter(n=>records[n]?.mode==='own').length,hard:real.filter(n=>['master','expert'].includes(byIndex[n]?.stage)).length,reading:new Set(memory.seen||[]).size};return definitions.map(a=>({...a,value:stats[a.metric],earned:stats[a.metric]>=a.target}));}
const paths={spark:'M32 13 37 27 51 32 37 37 32 51 27 37 13 32 27 27Z',wave:'M11 26Q21 12 32 26T53 26M11 38Q21 24 32 38T53 38',bloom:'M32 32C9 9 9 39 32 32C55 9 55 39 32 32C9 55 39 55 32 32C55 55 55 25 32 32',orbit:'M16 40C-1 22 40 5 49 23S23 59 16 40ZM17 20C37 3 60 41 42 48S2 33 17 20Z',sun:'M14 41A18 18 0 0 1 50 41M9 45H55M32 10V16M13 19 18 24M51 19 46 24',stars:'M17 16 30 29 48 19 43 46 30 29 16 46M17 16h.1M48 19h.1M43 46h.1M16 46h.1',crown:'M12 22 23 31 32 16 41 31 52 22 47 46H17ZM18 51H46',leaf:'M18 46C9 20 36 15 49 15 49 42 35 53 18 46ZM18 46 39 25',knot:'M23 21C5 21 5 43 23 43L41 21C59 21 59 43 41 43ZM22 21 42 43',book:'M32 22Q20 15 12 20V46Q20 41 32 48Q44 41 52 46V20Q44 15 32 22V48',bookstar:'M32 25Q20 18 12 23V47Q20 42 32 49Q44 42 52 47V23Q44 18 32 25V49M32 8 35 14 42 15 37 20 38 26 32 23 26 26 27 20 22 15 29 14Z'};
function badge(a){return '<svg viewBox="0 0 64 64" aria-hidden="true"><circle cx="32" cy="32" r="29" fill="currentColor" opacity=".07"/><circle cx="32" cy="32" r="27" fill="none" stroke="currentColor" opacity=".28"/><path d="'+paths[a.icon]+'" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>';}
const api={definitions,evaluate,badge};if(typeof module!=='undefined')module.exports=api;else root.HexAchievements=api;
})(typeof window!=='undefined'?window:globalThis);
