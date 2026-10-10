const fs=require('fs'),vm=require('vm'),assert=require('assert/strict'),E=require('./engine.js');
const html=fs.readFileSync(__dirname+'/index.html','utf8'),elements={},listeners={};
function element(){return {setAttribute(k,v){this[k]=v;},style:{},value:'48',checked:false,classList:{add(){},remove(){},toggle(){}},innerHTML:'',textContent:'',addEventListener(name,fn){(this.listeners??={})[name]=fn;},setPointerCapture(){},showModal(){this.open=true;},close(){this.open=false;},getBoundingClientRect(){return this.rect||{left:0,top:100,width:400,height:340,right:400,bottom:440};}};}
for(const m of html.matchAll(/id="([^"]+)"/g))elements[m[1]]=element();elements.tray.rect={left:0,top:500,width:400,height:180,right:400,bottom:680};
const storage=new Map([['lumahex-journey-v5',JSON.stringify({index:0,done:[],attempts:{},introSeen:true,sound:false})]]),brand=element();
const ctx={HexEngine:E,HexMotifs:require('./motifs.js'),HexCurriculum:require('./curriculum.js'),HexSave:require('./save.js'),document:{getElementById:id=>elements[id],querySelector:s=>s==='.brand'?brand:null,querySelectorAll:()=>[],addEventListener:(n,fn)=>listeners[n]=fn},localStorage:{getItem:k=>storage.get(k)||null,setItem:(k,v)=>storage.set(k,v)},window:{},navigator:{},location:{protocol:'file:'},setTimeout:()=>1,clearTimeout(){}};vm.createContext(ctx);vm.runInContext(fs.readFileSync(__dirname+'/game.js','utf8'),ctx);
vm.runInContext('load(0)',ctx);const run=s=>vm.runInContext(s,ctx),data=E.level(0),p=data.pieces[0],frame=E.layout(data);
function cell(q,r){return {x:frame.x+Math.sqrt(3)*frame.size*(q+r/2),y:100+frame.y+1.5*frame.size*r};}
function pointer(x,y,target){return {pointerId:1,pointerType:'touch',clientX:x,clientY:y,preventDefault(){},target:target||{closest:()=>null}};}
const bounds=run(`shapeSVG(data.pieces[0],E.layout(data).size)`),goal=cell(...p.home);
// Invert dragPosition so the floated anchor lands on its legal home cell.
const drop={x:goal.x+bounds.minX+bounds.w/2,y:goal.y+48+bounds.minY+bounds.h};
elements.tray.listeners.pointerdown(pointer(150,580,{closest:()=>({dataset:{piece:String(p.id)}})}));listeners.pointermove(pointer(drop.x,drop.y));
assert.equal(run('drag.target.join(",")'),p.home.join(','),'preview matches float anchor');
assert.ok(Math.abs(parseFloat(elements.ghost.style.top)+bounds.h-(drop.y-48))<.001,'entire piece stays above finger');
listeners.pointerup(pointer(drop.x,drop.y));assert.equal(run(`placements[${p.id}].join(',')`),p.home.join(','),'release uses preview cell');
elements.board.listeners.pointerdown(pointer(goal.x,goal.y));listeners.pointermove(pointer(800,200));listeners.pointerup(pointer(800,200));assert.equal(run(`placements[${p.id}]`),undefined,'release anywhere outside board returns to tray');elements.undo.onclick();assert.equal(run(`placements[${p.id}].join(',')`),p.home.join(','),'undo restores outside-board return');
const invalid=data.cells.find(at=>!E.fits(data,{},p.id,at));assert.ok(invalid);const bad=cell(...invalid),badFinger={x:bad.x+bounds.minX+bounds.w/2,y:bad.y+48+bounds.minY+bounds.h};elements.board.listeners.pointerdown(pointer(goal.x,goal.y));listeners.pointermove(pointer(badFinger.x,badFinger.y));listeners.pointerup(pointer(badFinger.x,badFinger.y));assert.equal(run(`placements[${p.id}].join(',')`),p.home.join(','),'invalid placement inside board retains original');
elements.board.listeners.pointerdown(pointer(goal.x,goal.y));listeners.pointermove(pointer(180,550));listeners.pointerup(pointer(180,550));assert.equal(run(`placements[${p.id}]`),undefined,'drag from board to tray removes piece');
elements.undo.onclick();assert.equal(run(`placements[${p.id}].join(',')`),p.home.join(','),'undo restores returned piece');
elements.board.listeners.pointerdown(pointer(goal.x,goal.y));listeners.pointermove(pointer(800,200));listeners.pointercancel(pointer(800,200));assert.equal(run(`placements[${p.id}].join(',')`),p.home.join(','),'cancel retains original');
// Board reposition to a different legal location, independent of stored solution.
const alternative=data.cells.find(at=>(at[0]!==p.home[0]||at[1]!==p.home[1])&&E.fits(data,{},p.id,at));assert.ok(alternative);const other=cell(...alternative),finger={x:other.x+bounds.minX+bounds.w/2,y:other.y+48+bounds.minY+bounds.h};
elements.board.listeners.pointerdown(pointer(goal.x,goal.y));listeners.pointermove(pointer(finger.x,finger.y));listeners.pointerup(pointer(finger.x,finger.y));assert.equal(run(`placements[${p.id}].join(',')`),alternative.join(','),'placed piece moves directly to another legal position');
for(const index of [0,10,30,50,59])for(const piece of E.level(index).pieces)for(const gap of [24,48,100]){const pts=piece.shape.map(([q,r])=>[Math.sqrt(3)*(q+r/2)*24,1.5*r*24]),minX=Math.min(...pts.map(p=>p[0]))-28,minY=Math.min(...pts.map(p=>p[1]))-28,w=Math.max(...pts.map(p=>p[0]))-minX+28,h=Math.max(...pts.map(p=>p[1]))-minY+28,b={minX,minY,w,h},a=E.dragPosition(b,200,600,true,gap);assert.equal(a.y+minY+h,600-gap);}
console.log('PASS: floated preview/release alignment, full-piece finger clearance, direct board reposition, outside-board return, invalid inside-board restoration, undo and cancellation.');
