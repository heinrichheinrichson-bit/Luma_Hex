const assert=require('assert/strict'),S=require('./save.js'),E=require('./engine.js'),M=require('./motifs.js');
const save={index:4,done:[0,2],attempts:{},records:{0:{mode:'own',hints:0}},sound:false,vibration:true,introSeen:true};
for(let n=0;n<M.motifs.length;n++){const data=E.level(n),placements={};for(const p of data.pieces.slice(0,3))placements[p.id]=p.home;save.attempts[n]={placements,hints:1,testUsed:false};}
assert.deepEqual(S.decode(S.encode(save)),save,'roundtrip all partial boards');
const bad=change=>{const value=JSON.parse(S.encode(save));change(value);assert.throws(()=>S.decode(JSON.stringify(value)));};
bad(v=>v.app='other');bad(v=>v.format=99);bad(v=>v.catalog.reverse());bad(v=>v.save.index=999);bad(v=>v.save.done=[-1]);bad(v=>v.save.attempts[0].placements[999]=[0,0]);bad(v=>v.save.attempts[0].placements[Object.keys(v.save.attempts[0].placements)[0]]=[99,99]);
bad(v=>{const ids=Object.keys(v.save.attempts[0].placements);v.save.attempts[0].placements[ids[1]]=v.save.attempts[0].placements[ids[0]];});
assert.throws(()=>S.decode('x'.repeat(1000001)));assert.throws(()=>S.decode('<script>'));
const older=JSON.parse(S.encode({...save,index:1,attempts:{}}));older.catalog=older.catalog.slice(0,30);assert.equal(S.decode(JSON.stringify(older)).index,1,'earlier catalog prefix remains compatible');
console.log('PASS: backup roundtrip for 300 boards, invalid files, incompatible catalogs, collisions, bounds and size limit.');

bad(v=>{const id=Object.keys(v.save.attempts[0].placements)[0];v.save.attempts[0].placements['0'+id]=v.save.attempts[0].placements[id];});

assert.equal(S.decode(S.encode({...save,dragGap:72})).dragGap,72,'drag clearance survives backup');
