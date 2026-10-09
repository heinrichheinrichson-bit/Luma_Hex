(function(root){
 'use strict';
 const M=typeof module!=='undefined'?require('./motifs.js'):root.HexMotifs;
 const directions=[[1,0],[0,1],[-1,1],[-1,0],[0,-1],[1,-1]];
 const key=(q,r)=>q+','+r;
 function random(seed){return ()=>{seed|=0;seed=seed+0x6D2B79F5|0;let t=Math.imul(seed^seed>>>15,1|seed);t^=t+Math.imul(t^t>>>7,61|t);return ((t^t>>>14)>>>0)/4294967296;};}
 function partition(index,seed,targetSize){
  const motif=M.motifs[index%M.motifs.length],variant=Math.floor(index/M.motifs.length),rand=random(seed),cells=M.cells(motif);
  const remaining=new Map(cells.map(c=>[key(...c),c])),groups=[];
  while(remaining.size){
   const pool=[...remaining.values()],start=pool[Math.floor(rand()*pool.length)],group=[start];remaining.delete(key(...start));
   const target=targetSize+Math.floor(rand()*2);
   while(group.length<target){const options=[];for(const [q,r] of group)for(const [dq,dr] of directions){const c=remaining.get(key(q+dq,r+dr));if(c&&!options.includes(c))options.push(c);}if(!options.length)break;const c=options[Math.floor(rand()*options.length)];group.push(c);remaining.delete(key(...c));}
   groups.push(group);
  }
  for(let i=groups.length-1;i>=0;i--){if(groups[i].length>1)continue;const c=groups[i][0];const neighbors=groups.map((g,j)=>({g,j})).filter(({g,j})=>j!==i&&g.some(([q,r])=>directions.some(([dq,dr])=>q+dq===c[0]&&r+dr===c[1]))).sort((a,b)=>a.g.length-b.g.length);if(neighbors.length){neighbors[0].g.push(c);groups.splice(i,1);}}
  const pieces=groups.map((g,id)=>({id,home:g[0],shape:g.map(([q,r])=>[q-g[0][0],r-g[0][1]])}));
  for(let i=pieces.length-1;i>0;i--){const j=Math.floor(rand()*(i+1));[pieces[i],pieces[j]]=[pieces[j],pieces[i]];}
  return {index,motif,variant,cells,pieces};
 }
 function level(index){
  // Fewer, larger pieces introduce the controls. Later levels alternate denser
  // combinations with breathing room; these are design targets, not measured difficulty.
  const target=index<3?7:index<7?6:index%5===4?6:4+(index%3===0?1:0);
  let best=null,score=Infinity;
  for(let candidate=0;candidate<24;candidate++){
   const data=partition(index,9187+index*7919+candidate*104729,target);
   const sizes=data.pieces.map(p=>p.shape.length);
   const patterns=data.pieces.map(p=>{const minQ=Math.min(...p.shape.map(c=>c[0])),minR=Math.min(...p.shape.map(c=>c[1]));return p.shape.map(([q,r])=>key(q-minQ,r-minR)).sort().join(';');});
   const repeats=patterns.length-new Set(patterns).size;
   const value=sizes.filter(s=>s<=2).length*12+repeats*5+Math.abs(data.pieces.length-Math.round(data.cells.length/(target+.3)))*2;
   if(value<score){score=value;best=data;}
  }
  return best;
 }
 function occupied(data,placements,except){const result=new Map();for(const p of data.pieces){const at=placements[p.id];if(!at||p.id===except)continue;for(const [q,r] of p.shape)result.set(key(q+at[0],r+at[1]),p.id);}return result;}
 function fits(data,placements,id,at){const p=data.pieces.find(p=>p.id===id);if(!p||!Array.isArray(at)||at.length!==2||!at.every(Number.isInteger))return false;const board=new Set(data.cells.map(c=>key(...c))),used=occupied(data,placements,id);return p.shape.every(([q,r])=>board.has(key(q+at[0],r+at[1]))&&!used.has(key(q+at[0],r+at[1])));}
 function layout(data){const pts=data.cells.map(([q,r])=>[Math.sqrt(3)*(q+r/2),1.5*r]),xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),minX=Math.min(...xs),maxX=Math.max(...xs),minY=Math.min(...ys),maxY=Math.max(...ys),size=Math.min(31,350/(maxX-minX+2),270/(maxY-minY+2));return {size,x:200-(minX+maxX)*size/2,y:166-(minY+maxY)*size/2};}
 function hint(data,placements){const p=data.pieces.find(p=>!placements[p.id]);if(!p)return null;const next=JSON.parse(JSON.stringify(placements)),goal=new Set(p.shape.map(([q,r])=>key(q+p.home[0],r+p.home[1])));let returned=0;for(const other of data.pieces){const at=next[other.id];if(at&&other.shape.some(([q,r])=>goal.has(key(q+at[0],r+at[1])))){delete next[other.id];returned++;}}next[p.id]=[...p.home];return {placements:next,returned,id:p.id};}
 function autoPlace(data,placements,mode){
  if(mode==='almost'||mode==='full'){const chosen=mode==='almost'?data.pieces.slice(0,-1):data.pieces;return {placements:Object.fromEntries(chosen.map(p=>[p.id,[...p.home]])),returned:0};}
  if(mode!=='step')throw new Error('Unknown test action');
  const p=data.pieces.find(p=>!placements[p.id]||placements[p.id][0]!==p.home[0]||placements[p.id][1]!==p.home[1]);if(!p)return null;
  const next=JSON.parse(JSON.stringify(placements)),goal=new Set(p.shape.map(([q,r])=>key(q+p.home[0],r+p.home[1])));let returned=0;
  for(const other of data.pieces){const at=next[other.id];if(other.id!==p.id&&at&&other.shape.some(([q,r])=>goal.has(key(q+at[0],r+at[1])))){delete next[other.id];returned++;}}
  next[p.id]=[...p.home];return {placements:next,returned};
 }
 function dragPosition(bounds,x,y,touch,gap=48,grab=[0,0]){
  if(!touch)return {x:x-grab[0],y:y-grab[1]};
  // Keep the entire bounding box above the finger, including tall pieces.
  return {x:x-(bounds.minX+bounds.w/2),y:y-Math.max(24,Math.min(100,gap))-(bounds.minY+bounds.h)};
 }
 const api={level,key,occupied,fits,directions,layout,hint,autoPlace,dragPosition};if(typeof module!=='undefined')module.exports=api;else root.HexEngine=api;
})(typeof window!=='undefined'?window:globalThis);
