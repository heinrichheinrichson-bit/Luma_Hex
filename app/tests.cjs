const assert=require('node:assert/strict'),E=require('./engine.js');
const M=require('./motifs.js'),COUNT=M.motifs.length,TOTAL=COUNT*M.variants;let total=0;
function connected(cells){const reached=new Set([E.key(...cells[0])]);let changed=true;while(changed){changed=false;for(const [q,r] of cells)if(!reached.has(E.key(q,r))&&E.directions.some(([dq,dr])=>reached.has(E.key(q+dq,r+dr)))){reached.add(E.key(q,r));changed=true;}}return reached.size===cells.length;}
for(let n=0;n<TOTAL;n++){
 const data=E.level(n),placements={};assert.deepEqual(data,E.level(n),'deterministic level');assert.ok(connected(data.cells),'connected motif');assert.equal(new Set(data.cells.map(c=>E.key(...c))).size,data.cells.length,'no duplicate cells');
 assert.equal(data.motif.quotes.length,M.variants,'individual texts per variant');assert.ok(data.motif.quotes[data.variant].length>15,'motif text exists');
 const frame=E.layout(data);for(const [q,r] of data.cells){const x=frame.x+Math.sqrt(3)*frame.size*(q+r/2),y=frame.y+1.5*frame.size*r;assert.ok(x-frame.size>=0&&x+frame.size<=400&&y-frame.size>=0&&y+frame.size<=340,'motif fits viewbox');}
 for(const p of data.pieces){
  assert.ok(E.fits(data,placements,p.id,p.home),'solution piece fits');
  const reached=new Set([E.key(...p.shape[0])]);let changed=true;
  while(changed){changed=false;for(const [q,r] of p.shape)if(!reached.has(E.key(q,r))&&E.directions.some(([dq,dr])=>reached.has(E.key(q+dq,r+dr)))){reached.add(E.key(q,r));changed=true;}}
  assert.equal(reached.size,p.shape.length,'connected piece');placements[p.id]=p.home;
  assert.ok(!E.fits(data,{},p.id,[99,99]),'outside board rejected');
  assert.ok(!E.fits(data,{},p.id,[.5,0]),'fractional placement rejected');
 }
 assert.equal(E.occupied(data,placements).size,data.cells.length,'complete coverage');
 const first=data.pieces[0],other=data.pieces[1];assert.ok(!E.fits(data,{[first.id]:first.home},other.id,first.home),'collision rejected');
 assert.equal(E.hint(data,placements),null,'completed puzzle needs no hint');
 let mixed={};for(const p of data.pieces.slice(0,5)){const options=[...data.cells.slice(n%data.cells.length),...data.cells.slice(0,n%data.cells.length)],at=options.find(at=>E.fits(data,mixed,p.id,at));if(at)mixed[p.id]=at;}
 for(let step=0;step<data.pieces.length*2&&E.occupied(data,mixed).size<data.cells.length;step++){const before=JSON.stringify(mixed),result=E.hint(data,mixed);assert.ok(result,'unfinished board has a hint');assert.equal(JSON.stringify(mixed),before,'hint does not mutate previous history');mixed=result.placements;const valid={};for(const p of data.pieces)if(mixed[p.id]){assert.ok(E.fits(data,valid,p.id,mixed[p.id]),'hint leaves a valid board');valid[p.id]=mixed[p.id];}}
 assert.equal(E.occupied(data,mixed).size,data.cells.length,'hints converge from different valid placements');
 const almost=E.autoPlace(data,mixed,'almost').placements;assert.equal(Object.keys(almost).length,data.pieces.length-1,'almost leaves exactly one piece');assert.ok(E.occupied(data,almost).size<data.cells.length,'almost does not complete');
 const lastStep=E.autoPlace(data,almost,'step');assert.equal(E.occupied(data,lastStep.placements).size,data.cells.length,'one step finishes almost solved puzzle');
 const full=E.autoPlace(data,{},'full').placements;assert.equal(E.occupied(data,full).size,data.cells.length,'full fills the motif');assert.equal(E.autoPlace(data,full,'step'),null,'step on full solution is a no-op');
 let stepped={};for(let step=0;step<data.pieces.length;step++){const before=JSON.stringify(stepped);const next=E.autoPlace(data,stepped,'step');assert.equal(JSON.stringify(stepped),before,'test step preserves undo state');stepped=next.placements;assert.equal(Object.keys(stepped).length,step+1,'one new piece per step');}assert.deepEqual(stepped,full,'steps reach full solution');
 total+=data.cells.length;
}
assert.equal(TOTAL,60);assert.equal(M.variants,1);assert.equal(M.motifs.filter(m=>m.kind==='figure').length,24);assert.equal(M.motifs.filter(m=>m.kind==='abstract').length,36);
console.log(`PASS: ${TOTAL} levels, ${total} cells; connectivity, deterministic solutions, frame bounds, collisions, texts, hint validity, convergence and test controls.`);

// Reject duplicate outlines even when translated, mirrored or rotated on the hex grid.
function signature(cells){const forms=[];for(let flip=0;flip<2;flip++)for(let turn=0;turn<6;turn++){let c=cells.map(([q,r])=>flip?[r,q]:[q,r]);for(let t=0;t<turn;t++)c=c.map(([q,r])=>[-r,q+r]);const q0=Math.min(...c.map(p=>p[0])),r0=Math.min(...c.map(p=>p[1]));forms.push(c.map(([q,r])=>[q-q0,r-r0].join(',')).sort().join(';'));}return forms.sort()[0];}
const unique=new Set(M.motifs.map(m=>signature(m.cells)));assert.equal(unique.size,TOTAL,'every outline is unique, including rotations and reflections');console.log('PASS: 60 distinct outlines, including rotation/reflection comparison.');

for(let i=0;i<3;i++){const d=E.level(i);assert.ok(d.pieces.length<=6,'opening puzzles have at most six pieces');assert.ok(d.pieces.every(p=>p.shape.length>=3),'opening has no tiny fragments');}
console.log('PASS: opening piece-count and fragment limits.');

for(const m of M.motifs.filter(m=>m.blocked)){assert.equal(m.blocked.length,new Set(m.blocked.map(c=>c.join(','))).size);assert.ok(m.blocked.every(b=>!m.cells.some(c=>c.join(',')===b.join(','))),'obstacles are outside fillable cells');const d=E.level(M.motifs.indexOf(m));for(const p of d.pieces)for(const b of m.blocked)assert.equal(E.fits(d,{},p.id,b),false,'obstacle cannot receive piece anchor');}
console.log('PASS: 10 obstacle boards with unfillable anchor cells.');
