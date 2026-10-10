const assert=require('assert/strict'),M=require('./motifs.js');
function masks(cells){const forms=[];for(let reflect=0;reflect<2;reflect++)for(let turn=0;turn<6;turn++){let c=cells.map(([q,r])=>reflect?[r,q]:[q,r]);for(let t=0;t<turn;t++)c=c.map(([q,r])=>[-r,q+r]);const minQ=Math.min(...c.map(p=>p[0])),minR=Math.min(...c.map(p=>p[1]));let bits=0n;for(const [q,r]of c)bits|=1n<<BigInt(q-minQ+2+32*(r-minR+2));forms.push(bits);}return forms;}
const data=M.motifs.map(m=>{const forms=masks(m.cells);return {forms,canonical:forms.reduce((a,b)=>a<b?a:b),size:m.cells.length};});
for(let i=60;i<data.length;i++){
 const next=data[i],aligned=next.forms.flatMap(bits=>[-1,0,1].flatMap(r=>[-1,0,1].map(q=>{const shift=BigInt(q+32*r);return shift>=0n?bits<<shift:bits>>(-shift);}))); 
 for(let j=0;j<i;j++){
  const old=data[j];if(Math.min(next.size,old.size)/Math.max(next.size,old.size)<.82)continue;
  const maximumDifference=Math.floor((next.size+old.size)*.18/1.82);
  for(const bits of aligned){let difference=bits^old.canonical,count=0;while(difference&&count<=maximumDifference){difference&=difference-1n;count++;}assert.ok(count>maximumDifference,'new puzzle too similar: '+i+' and '+j);}
 }
}
assert.equal(new Set(M.motifs.slice(60).map(m=>m.quotes[0])).size,1140,'new closing texts are distinct');
const families=new Map();for(const m of M.motifs.slice(60))families.set(m.family,(families.get(m.family)||0)+1);assert.equal(families.size,12);assert.ok([...families.values()].every(n=>n===95));
console.log('PASS: 1140 expanded fields, 12 balanced construction families, distinct closing texts and near-duplicate rejection under rotation/reflection and small translations.');
