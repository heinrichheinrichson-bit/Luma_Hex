const fs=require('fs'),path=require('path');
const ROOT=path.resolve(__dirname,'../app'),current=require(path.join(ROOT,'motifs.js'));const M={...current,motifs:current.motifs.slice(0,60)};if(M.motifs.length!==60)throw Error('Expected the existing 60-level catalog');
const dirs=[[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]],key=c=>c.join(',');
let seed=184091;const rnd=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
const int=(a,b)=>a+Math.floor(rnd()*(b-a+1)),pick=a=>a[int(0,a.length-1)];
const dist=(q,r)=>Math.max(Math.abs(q),Math.abs(r),Math.abs(q+r));
const unique=c=>[...new Map(c.map(p=>[key(p),p])).values()];
function connected(cells){const set=new Set(cells.map(key)),seen=new Set([key(cells[0])]),queue=[cells[0]];for(let i=0;i<queue.length;i++){const [q,r]=queue[i];for(const [a,b]of dirs){const k=key([q+a,r+b]);if(set.has(k)&&!seen.has(k)){seen.add(k);queue.push([q+a,r+b]);}}}return seen.size===set.size;}
function forms(cells){const results=[];for(let flip=0;flip<2;flip++)for(let turn=0;turn<6;turn++){let c=cells.map(([q,r])=>flip?[r,q]:[q,r]);for(let t=0;t<turn;t++)c=c.map(([q,r])=>[-r,q+r]);const q0=Math.min(...c.map(p=>p[0])),r0=Math.min(...c.map(p=>p[1]));let mask=0n;for(const [q,r]of c)mask|=1n<<BigInt(q-q0+2+32*(r-r0+2));results.push(mask);}return results;}
const canonical=c=>forms(c).reduce((a,b)=>a<b?a:b);
const existing=M.motifs.map(m=>({mask:canonical(m.cells),size:m.cells.length})),exact=new Set(existing.map(v=>v.mask.toString()));
function sufficientlyDifferent(cells){const f=forms(cells),n=cells.length,can=f.reduce((a,b)=>a<b?a:b);if(exact.has(can.toString()))return false;
 const aligned=f.flatMap(mask=>[-1,0,1].flatMap(r=>[-1,0,1].map(q=>{const shift=BigInt(q+32*r);return shift>=0n?mask<<shift:mask>>(-shift);}))); 
 for(const old of existing){if(Math.min(n,old.size)/Math.max(n,old.size)<.82)continue;const limit=Math.floor((n+old.size)*.18/1.82);for(const mask of aligned){let xor=mask^old.mask,bits=0;while(xor&&bits<=limit){xor&=xor-1n;bits++;}if(bits<=limit)return false;}}
 return true;
}
function scan(test){const c=[];for(let r=-7;r<=7;r++)for(let q=-7;q<=7;q++)if(test(q,r))c.push([q,r]);return c;}
function convex(){const bounds=Array.from({length:6},()=>int(2,4));return scan((q,r)=>q<=bounds[0]&&q>=-bounds[1]&&r<=bounds[2]&&r>=-bounds[3]&&q+r<=bounds[4]&&q+r>=-bounds[5]);}
function disk(q0,r0,radius){return scan((q,r)=>dist(q-q0,r-r0)<=radius);}
const families=[
 {id:'facets',name:'Facetten',color:3,make(){let cells=convex();const d=pick([0,1,2]),side=int(1,2),cut=int(-1,1);return {cells:cells.filter(([q,r])=>!((d===0?q:d===1?r:q+r)>cut&&(d===0?r:d===1?q:q)>side))};}},
 {id:'terraces',name:'Stufenwege',color:6,make(){const rows=int(5,7),left=int(-3,-1),width=int(4,7),shift=int(-1,1),breakAt=int(1,4),narrow=int(0,2);return {cells:scan((q,r)=>{const row=r+3,l=left-Math.floor(row/2)+shift*(row>=breakAt?1:0),w=width-(row>=breakAt?narrow:0);return row>=0&&row<rows&&q>=l&&q<l+w;})};}},
 {id:'arches',name:'Lichtbögen',color:2,make(){const base=convex(),cx=int(-1,2),cy=int(-1,1),rad=int(1,2),opening=pick([0,1,2]);return {cells:base.filter(([q,r])=>dist(q-cx,r-cy)>rad&&!(opening===0?q>cx&&r===cy:opening===1?r>cy&&q===cx:q+r>cx+cy&&q-r===cx-cy))};}},
 {id:'bridges',name:'Verbindungen',color:4,make(){const shift=int(-1,2),a=disk(-2,0,int(1,2)),b=disk(2,shift,int(1,2)),thickness=int(0,1),band=scan((q,r)=>q>=-2&&q<=2&&Math.abs(r-Math.round((q+2)*shift/4))<=thickness);return {cells:unique([...a,...b,...band])};}},
 {id:'ribbons',name:'Bänder',color:0,make(){let q=-3,r=int(-2,1),centers=[[q,r]],direction=int(0,5),length=int(4,6);for(let i=0;i<length;i++){direction=(direction+pick([0,0,1,5]))%6;q+=dirs[direction][0];r+=dirs[direction][1];centers.push([q,r]);}return {cells:unique(centers.flatMap(([a,b])=>disk(a,b,1)))};}},
 {id:'notches',name:'Nischenwege',color:7,make(){const base=convex(),a=int(-2,1),b=int(-1,2),side=int(0,2);return {cells:base.filter(([q,r])=>!(q<a&&r===b)&&!(side===0?r<-1&&q===b:side===1?q>1&&r===a:q+r>2&&q===a))};}},
 {id:'windows',name:'Fensterlicht',color:4,make(){const base=convex(),cx=int(-1,1),cy=int(-1,1),wide=rnd()<.4,holes=new Set([[cx,cy],...(wide?[[cx+1,cy],[cx,cy+1]]:[])].map(key));return {cells:base.filter(c=>!holes.has(key(c)))};}},
 {id:'anchors',name:'Ankerwege',color:9,make(){const base=convex(),set=new Set(base.map(key)),interior=base.filter(([q,r])=>dirs.every(([a,b])=>set.has(key([q+a,r+b])))),blocked=[];for(let i=0;i<int(1,4)&&interior.length;i++){const at=interior.splice(int(0,interior.length-1),1)[0];blocked.push(at);}const holes=new Set(blocked.map(key));return {cells:base.filter(c=>!holes.has(key(c))),blocked};}},
 {id:'fans',name:'Fächerwege',color:5,make(){const base=convex(),low=int(-2,0),high=int(1,3),side=int(0,2);return {cells:base.filter(([q,r])=>(side===0?q:side===1?r:q+r)>=low&&(side===0?r:side===1?q:q-r)<=high)};}},
 {id:'islands',name:'Inselpfade',color:0,make(){const centers=[[0,0],pick([[-2,1],[2,-1],[1,2],[-1,-2]])];if(rnd()<.7)centers.push(pick([[-2,-1],[2,1],[0,3],[3,-2]]));return {cells:unique(centers.flatMap(([q,r],i)=>disk(q,r,i===0?2:1)))};}},
 {id:'channels',name:'Durchgänge',color:3,make(){const base=convex(),row=int(-2,2),start=int(-2,0),end=int(1,3),h=new Set(scan((q,r)=>r===row&&q>=start&&q<=end).map(key));return {cells:base.filter(c=>!h.has(key(c)))};}},
 {id:'forks',name:'Abzweigungen',color:1,make(){const base=disk(0,0,1),arms=[];for(const direction of [0,2,4]){const length=int(2,4);for(let i=1;i<=length;i++){const [q,r]=dirs[direction];arms.push(...disk(q*i,r*i,int(0,1)));}}return {cells:unique([...base,...arms])};}}
];
const pool=families.map(()=>[]);let tried=0;
for(let round=0;round<20;round++)for(let family=0;family<families.length;family++){
 const spec=families[family];let found=false;
 for(let attempt=0;attempt<12000;attempt++){
  tried++;let {cells,blocked=[]}=spec.make();
  // Vary the construction itself with substantial bays, lobes and inner openings.
  // Similarity rejection below still applies across every family and earlier board.
  for(let edit=0;edit<2;edit++)if(rnd()<.7&&cells.length){
   const before=new Set(cells.map(key)),boundary=cells.filter(([q,r])=>dirs.some(([a,b])=>!before.has(key([q+a,r+b]))));
   const mode=int(0,2),center=pick(mode===2?cells:boundary),[q,r]=center;
   if(mode===0){const removed=new Set(disk(q,r,1).map(key));cells=cells.filter(c=>!removed.has(key(c)));}
   else if(mode===1){const [a,b]=pick(dirs);cells=unique([...cells,...disk(q+a,r+b,1)]).filter(c=>!blocked.some(v=>key(v)===key(c)));}
   else {const [a,b]=pick(dirs),removed=[center,[q+a,r+b]].filter(c=>before.has(key(c)));const holes=new Set(removed.map(key));cells=cells.filter(c=>!holes.has(key(c)));if(rnd()<.4)blocked=unique([...blocked,...removed]);}
  }
  cells=unique(cells).sort((a,b)=>a[1]-b[1]||a[0]-b[0]);
  if(cells.length<22||cells.length>46||!connected(cells))continue;
  const width=Math.max(...cells.map(c=>c[0]))-Math.min(...cells.map(c=>c[0])),height=Math.max(...cells.map(c=>c[1]))-Math.min(...cells.map(c=>c[1]));if(width>10||height>8||width<3||height<3)continue;
  const set=new Set(cells.map(key)),tips=cells.filter(([q,r])=>dirs.filter(([a,b])=>set.has(key([q+a,r+b]))).length<=1).length;if(tips>2)continue;
  if(!sufficientlyDifferent(cells))continue;
  const mask=canonical(cells);exact.add(mask.toString());existing.push({mask,size:cells.length});
  const n=round+1,color=spec.color,cellColors=Object.fromEntries(cells.map(([q,r])=>[q+','+r,(q-r)%4===0?(color+1)%12:color]));
  pool[family].push({id:`library-${spec.id}-${String(n).padStart(2,'0')}`,name:`${spec.name} ${String(n).padStart(2,'0')}`,subtitle:blocked.length?'Finde deinen Weg um die festen Anker':'Eine neue Form für deinen nächsten guten Zug',color,kind:'abstract',family:spec.id,cells,blocked,cellColors,quotes:[`${['Eine neue Form. Ein eigener Weg.','Aus vielen Möglichkeiten hast du eine passende gemacht.','Ein guter Zug nach dem anderen.','Auch die letzte kleine Ecke hat ihren Platz gefunden.','Kurz innehalten. Das hast du gut zusammengesetzt.'][round%5]} ${['Jetzt dürfen die Gedanken kurz Pause machen.','Dein Lichtstück ist vollständig.','Weiter geht es, wenn du bereit bist.','Ein kleiner Erfolg für deinen Tag.'][family%4]}`]});found=true;break;
 }
 if(!found)throw Error('Cannot find distinct candidate for '+spec.id+' '+round);
}
// Interleave the families rather than presenting twenty boards of one type in a row.
const added=Array.from({length:20},(_,round)=>families.map((_,i)=>pool[(i+round)%families.length][round])).flat();
const copy=require('./library-copy.json');for(const m of added){if(!copy[m.id])throw Error('Missing text: '+m.id);Object.assign(m,copy[m.id]);}
const motifs=[...M.motifs,...added];
let source=fs.readFileSync(path.join(ROOT,'motifs.js'),'utf8').replace(/const motifs=\[.*?\];const cells=/,'const motifs='+JSON.stringify(motifs)+';const cells=');
fs.writeFileSync(path.join(ROOT,'motifs.js'),source);
fs.writeFileSync(path.resolve(__dirname,'../design/library08-selection.json'),JSON.stringify({total:motifs.length,candidates:tried,similarityLimit:.82,families:families.map((f,i)=>({id:f.id,name:f.name,count:pool[i].length})),added:added.map(m=>({id:m.id,cells:m.cells.length,blocked:m.blocked.length}))},null,2));
console.log(`Selected ${added.length} new boards from ${tried} candidates. Total ${motifs.length}.`);
