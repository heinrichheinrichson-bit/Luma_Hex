const assert=require('assert/strict'),F=require('./finish.js'),S=require('./save.js');
const mem={recent:[],byPuzzle:{}},seen=new Set(),kinds=new Set();
for(let n=0;n<1200;n++){const line=F.choose({id:'abstract'},mem,String(n));assert(!line.retired);assert(!mem.recent.includes(line.id),'no repeat within 72 finishes');if(n<F.active.length){assert(!seen.has(line.id));seen.add(line.id);}if(n<9)kinds.add(line.kind);mem.byPuzzle[n]=line.id;mem.recent.push(line.id);mem.recent=mem.recent.slice(-72);assert.equal(F.choose({id:'abstract'},mem,String(n)).id,line.id);}
assert.equal(seen.size,F.active.length);assert.equal(kinds.size,5);
assert.equal(new Set(F.lines.map(v=>v.id)).size,F.lines.length);assert.equal(new Set(F.active.map(v=>v.text)).size,F.active.length);
for(const l of F.active){assert(!/nicht verwendet|Puzzle|Display|Spielfeld/i.test(l.text));if(['fact','quote'].includes(l.kind))assert.match(l.source.url,/^https:\/\//);if(l.kind==='quote')assert(l.author&&l.work);if(l.kind==='riddle')assert(l.answer);}
assert(!F.choose({}, {recent:[],byPuzzle:{0:'humor-0'}},'0').retired);
const save={index:0,done:[],attempts:{},finishMemory:mem};assert.deepEqual(S.decode(S.encode(save)).finishMemory,mem);save.finishMemory={recent:['humor-0'],byPuzzle:{0:'humor-0'}};assert.equal(S.decode(S.encode(save)).finishMemory.byPuzzle[0],'humor-0');save.finishMemory.recent=['unknown'];assert.throws(()=>S.decode(S.encode(save)));
console.log('PASS: 82 unique active texts, five categories in first nine finishes, 1200 selections, 72-finish repeat spacing, legacy migration, metadata and backup validation.');
