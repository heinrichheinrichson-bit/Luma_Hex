const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const elements={};
function element(){const classes=new Set();return {style:{},checked:false,classList:{add:n=>classes.add(n),remove:n=>classes.delete(n),toggle:(n,on)=>on?classes.add(n):classes.delete(n)},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;},innerHTML:'',textContent:''};}
for(const match of html.matchAll(/id="([^"]+)"/g))elements[match[1]]=element();
const brand=element(),store=new Map([['lumahex-journey-v4',JSON.stringify({done:[0,2],index:3,introSeen:true,sound:false,attempts:{3:{placements:{0:[0,0]}}}})]]);
const ctx={HexSave:require('./save.js'),HexEngine:require('./engine.js'),HexMotifs:require('./motifs.js'),localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},document:{addEventListener(){},getElementById:id=>{assert.ok(elements[id],'known DOM element '+id);return elements[id];},querySelector:s=>s==='.brand'?brand:null,querySelectorAll:()=>Object.values(elements).filter(e=>e.open)},window:{},navigator:{},location:{protocol:'file:'},setTimeout:()=>1,clearTimeout(){}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync(__dirname+'/game.js','utf8'),ctx);
assert.equal(elements.levelNumber.textContent,'04');
let save=JSON.parse(store.get('lumahex-journey-v5'));
assert.deepEqual(save.done,[0,2],'collection survives migration');
assert.deepEqual(save.attempts[3].placements,{},'old incompatible placements are discarded');
brand.onclick({preventDefault(){}});
assert.equal(elements.journey.open,true);assert.equal(elements.journeyProgress.textContent,'2 von 300 Lichtstücken gesammelt');
assert.equal((elements.journeyChapters.innerHTML.match(/data-journey=/g)||[]).length,10);
elements.journeyContinue.onclick();assert.equal(elements.levelNumber.textContent,'02','continue selects first unsolved');
elements.testAlmost.onclick();assert.equal(vm.runInContext('data.pieces.length-Object.keys(placements).length',ctx),1);
elements.testStep.onclick();assert.equal(vm.runInContext('E.occupied(data,placements).size===data.cells.length',ctx),true);
elements.undo.onclick();assert.equal(vm.runInContext('data.pieces.length-Object.keys(placements).length',ctx),1);
elements.openJourney.onclick();assert.equal(elements.journeyProgress.textContent,'3 von 300 Lichtstücken gesammelt');
elements.journeyChapters.onclick({target:{closest:()=>({dataset:{journey:'299'}})}});assert.equal(elements.levelNumber.textContent,'300');
elements.testFull.onclick();elements.next.onclick();assert.equal(elements.journey.open,true,'last puzzle leads to journey');
assert.ok(html.includes('Version 0.8 · 300 unterschiedliche Rätsel'));
console.log('PASS: game startup, save migration, journey navigation, automatic controls, undo and final-level navigation (simulated DOM).');

elements.openBackup.onclick();assert.ok(elements.backupCode.value.includes('"app": "luma-hex"'));const before=elements.backupCode.value;elements.backupCode.value='broken';elements.checkBackup.onclick();assert.equal(elements.confirmRestore.hidden,true);elements.backupCode.value=before;elements.checkBackup.onclick();assert.equal(elements.confirmRestore.hidden,false);assert.ok(elements.restorePreview.textContent.includes('gesammelte'));assert.equal(vm.runInContext("records[1].mode",ctx),'test','test completion is tracked separately');console.log('PASS: backup preview, invalid-import rejection and test completion records.');

let reloaded=false;ctx.location.reload=()=>{reloaded=true;};elements.confirmRestore.onclick();assert.equal(reloaded,true);assert.ok(JSON.parse(store.get('lumahex-journey-v5')).records);console.log('PASS: validated backup applies only after explicit restore action.');

elements.openJourney.onclick();assert.equal((elements.journeyChapterSelect.innerHTML.match(/<option/g)||[]).length,30);elements.journeyPrevious.onclick();assert.ok(elements.journeyChapters.innerHTML.includes('data-journey="280"'));elements.jumpNumber.value=123;elements.jumpLevel.onclick();assert.equal(elements.levelNumber.textContent,'123');elements.collection.onclick();assert.equal((elements.galleryGrid.innerHTML.match(/data-motif=/g)||[]).length,20);elements.galleryNext.onclick();assert.ok(elements.galleryGrid.innerHTML.includes('data-motif="20"'));console.log('PASS: 30-chapter navigation, direct puzzle jump and bounded gallery pages.');
