const assert=require('assert/strict'),C=require('./curriculum.js'),E=require('./engine.js'),M=require('./motifs.js');
assert.equal(C.order.length,300);assert.equal(new Set(C.order).size,300);
assert.deepEqual(C.stages.map(s=>C.byIndex.filter(m=>m.stage===s.id).length),[60,90,90,60]);
for(let pos=0;pos<C.order.length;pos++){const n=C.order[pos],meta=C.byIndex[n],actual=C.inspect(n);assert.equal(C.position[n],pos);assert.equal(meta.id,M.motifs[n].id);assert.equal(meta.score,actual.score,'compiled assessment stays in sync with the exact pieces');assert.deepEqual(meta.possiblePlacements,actual.possiblePlacements);assert.equal(meta.form,actual.form);assert.equal(meta.structure,actual.structure);assert.deepEqual(meta.tags,actual.tags);assert.equal(meta.cells,E.level(n).cells.length);if(pos>0)assert.ok(C.stages.findIndex(s=>s.id===C.byIndex[C.order[pos-1]].stage)<=C.stages.findIndex(s=>s.id===meta.stage),'stages never move backwards');}
for(let ch=0;ch<30;ch++){const ids=C.order.slice(ch*10,ch*10+10);assert.equal(new Set(ids.map(n=>C.byIndex[n].stage)).size,1,'chapters belong to one stage');}
for(let n=0;n<C.lessons.length;n++){const d=C.lesson(n),used={};assert.ok(d.cells.length<=6,'teaching boards stay small');for(const p of d.pieces){assert.equal(E.fits(d,used,p.id,p.home),true);used[p.id]=p.home;}assert.equal(E.occupied(d,used).size,d.cells.length);for(const [id,at]of Object.entries(C.lessons[n].seed||{}))assert.equal(E.fits(d,{},+id,at),true);for(const p of d.pieces)for(const at of d.motif.blocked)assert.equal(E.fits(d,{},p.id,at),false);}
for(const n of [0,100,299])assert.ok(C.stages.some(s=>s.id===C.classify(C.inspect(n))));
console.log('PASS: 300 classified stable puzzle IDs, exact piece metrics, four ordered stages, 30 coherent chapters and six small solvable teaching boards. Difficulty remains a design estimate.');

assert.ok(C.byIndex.filter(m=>m.stage==='arrive').every(m=>m.anchors===0),'first stage introduces no anchor obstacles');
