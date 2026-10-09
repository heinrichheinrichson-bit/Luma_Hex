const fs=require('fs'),vm=require('vm'),assert=require('assert/strict');
const html=fs.readFileSync(__dirname+'/index.html','utf8');
const elements={};
function element(){const classes=new Set();return {setAttribute(k,v){this[k]=v;},style:{},checked:false,classList:{add:n=>classes.add(n),remove:n=>classes.delete(n),toggle:(n,on)=>on?classes.add(n):classes.delete(n)},addEventListener(){},showModal(){this.open=true;},close(){this.open=false;},innerHTML:'',textContent:''};}
for(const match of html.matchAll(/id="([^"]+)"/g))elements[match[1]]=element();
const brand=element(),store=new Map([['lumahex-journey-v4',JSON.stringify({done:[0,2],index:3,introSeen:true,sound:false,attempts:{3:{placements:{0:[0,0]}}}})]]);
const ctx={HexSave:require('./save.js'),HexEngine:require('./engine.js'),HexMotifs:require('./motifs.js'),localStorage:{getItem:k=>store.get(k)||null,setItem:(k,v)=>store.set(k,v)},document:{addEventListener(){},getElementById:id=>{assert.ok(elements[id],'known DOM element '+id);return elements[id];},querySelector:s=>s==='.brand'?brand:null,querySelectorAll:()=>Object.values(elements).filter(e=>e.open)},window:{},navigator:{},location:{protocol:'file:'},setTimeout:()=>1,clearTimeout(){}};
vm.createContext(ctx);vm.runInContext(fs.readFileSync(__dirname+'/game.js','utf8'),ctx);
assert.equal(elements.levelNumber.textContent,'04');
let save=JSON.parse(store.get('lumahex-journey-v5'));
assert.deepEqual(save.done,[0,2],'collection survives migration');
assert.deepEqual(save.attempts[3].placements,{},'old incompatible placements are discarded');
brand.onclick({preventDefault(){}});assert.equal(elements.home.open,true);elements.gameJourney.onclick();
assert.equal(elements.journey.open,true);assert.equal(elements.journeyProgress.textContent,'2 von 300 Lichtstücken gesammelt');
assert.equal((elements.journeyChapters.innerHTML.match(/data-journey=/g)||[]).length,10);
elements.journeyContinue.onclick();assert.equal(elements.levelNumber.textContent,'02','continue selects first unsolved');
elements.testAlmost.onclick();assert.equal(vm.runInContext('data.pieces.length-Object.keys(placements).length',ctx),1);
elements.testStep.onclick();assert.equal(vm.runInContext('E.occupied(data,placements).size===data.cells.length',ctx),true);
elements.undo.onclick();assert.equal(vm.runInContext('data.pieces.length-Object.keys(placements).length',ctx),1);
elements.openJourney.onclick();assert.equal(elements.journeyProgress.textContent,'3 von 300 Lichtstücken gesammelt');
elements.journeyChapters.onclick({target:{closest:()=>({dataset:{journey:'299'}})}});assert.equal(elements.levelNumber.textContent,'300');
elements.testFull.onclick();elements.next.onclick();assert.equal(elements.levelNumber.textContent,'04','last puzzle wraps to an earlier unsolved puzzle');
assert.ok(html.includes('Version 0.9.0'));
console.log('PASS: game startup, save migration, journey navigation, automatic controls, undo and final-level navigation (simulated DOM).');

elements.openBackup.onclick();assert.ok(elements.backupCode.value.includes('"app": "luma-hex"'));const before=elements.backupCode.value;elements.backupCode.value='broken';elements.checkBackup.onclick();assert.equal(elements.confirmRestore.hidden,true);elements.backupCode.value=before;elements.checkBackup.onclick();assert.equal(elements.confirmRestore.hidden,false);assert.ok(elements.restorePreview.textContent.includes('gesammelte'));assert.equal(vm.runInContext("records[1].mode",ctx),'test','test completion is tracked separately');console.log('PASS: backup preview, invalid-import rejection and test completion records.');

let reloaded=false;ctx.location.reload=()=>{reloaded=true;};elements.confirmRestore.onclick();assert.equal(reloaded,true);assert.ok(JSON.parse(store.get('lumahex-journey-v5')).records);console.log('PASS: validated backup applies only after explicit restore action.');

vm.runInContext('load(299)',ctx);elements.openJourney.onclick();assert.equal((elements.journeyChapterSelect.innerHTML.match(/<option/g)||[]).length,30);elements.journeyPrevious.onclick();assert.ok(elements.journeyChapters.innerHTML.includes('data-journey="280"'));elements.jumpNumber.value=123;elements.jumpLevel.onclick();assert.equal(elements.levelNumber.textContent,'123');elements.collection.onclick();assert.equal((elements.galleryGrid.innerHTML.match(/data-motif=/g)||[]).length,20);elements.galleryNext.onclick();assert.ok(elements.galleryGrid.innerHTML.includes('data-motif="20"'));console.log('PASS: 30-chapter navigation, direct puzzle jump and bounded gallery pages.');

vm.runInContext('done=new Set(Array.from({length:100},(_,i)=>i));load(5)',ctx);elements.galleryContinue.onclick();assert.equal(elements.levelNumber.textContent,'101','continue skips a long completed run');
elements.testFull.onclick();elements.next.onclick();assert.equal(elements.levelNumber.textContent,'102','next skips completed puzzle');
vm.runInContext('load(150);placements={}',ctx);elements.galleryContinue.onclick();assert.equal(elements.levelNumber.textContent,'151','unfinished current puzzle is resumed');
vm.runInContext('done=new Set(Array.from({length:TOTAL},(_,i)=>i));load(299)',ctx);elements.next.onclick();assert.equal(elements.journey.open,true,'all solved opens journey');elements.galleryContinue.onclick();assert.equal(elements.journey.open,true,'all solved continue does not replay');elements.replay.onclick();assert.equal(elements.levelNumber.textContent,'300');assert.equal(vm.runInContext('Object.keys(placements).length',ctx),0,'explicit replay remains available');
console.log('PASS: completed runs skipped, unfinished puzzle resumed, wraparound, all-complete fallback and explicit replay.');

store.set('lumahex-journey-v5',JSON.stringify({index:5,done:Array.from({length:100},(_,i)=>i),introSeen:true,sound:false,dragGap:72}));const restarted={...ctx,window:{}};vm.createContext(restarted);vm.runInContext(fs.readFileSync(__dirname+'/game.js','utf8'),restarted);assert.equal(elements.levelNumber.textContent,'101','startup skips saved completed puzzle');assert.equal(JSON.parse(store.get('lumahex-journey-v5')).dragGap,72,'finger setting survives');console.log('PASS: restart skips completed saved puzzle and preserves finger setting.');

// The new information architecture shares routes while preserving the current attempt.
vm.runInContext("routeView('home')",restarted);assert.equal(elements.home.open,true);assert.ok(elements.homeResume.textContent.includes('101'));elements.homeContinue.onclick();assert.equal(elements.home.open,false);assert.equal(elements.levelNumber.textContent,'101');
elements.testAlmost.onclick();const partial=vm.runInContext('JSON.stringify(placements)',restarted);
for(const route of ['menu','gallery','journey','home']){vm.runInContext('routeView('+JSON.stringify(route)+')',restarted);assert.equal(Object.values(elements).filter(e=>e.open).length,1,'only one destination open');assert.equal(elements[route].open,true);}
elements.homeContinue.onclick();assert.equal(vm.runInContext('JSON.stringify(placements)',restarted),partial,'navigation retains unfinished placements');
elements.gameJourney.onclick();elements.filterSolved.onclick();assert.ok(elements.journeyChapters.innerHTML.includes('empty-state'),'empty solved chapter explains state');elements.filterOpen.onclick();assert.equal(elements.filterOpen['aria-pressed'],'true');assert.equal((elements.journeyChapters.innerHTML.match(/data-journey=/g)||[]).length,10);elements.journeyPrevious.onclick();assert.ok(elements.journeyChapters.innerHTML.includes('empty-state'),'completed chapter has no open puzzles');elements.filterAll.onclick();assert.equal((elements.journeyChapters.innerHTML.match(/data-journey=/g)||[]).length,10);
vm.runInContext("routeView('menu')",restarted);elements.openHelp.onclick();assert.equal(elements.help.open,true);restarted.window.LumaBack();assert.equal(elements.menu.open,true,'back from help returns to settings');elements.openBackup.onclick();restarted.window.LumaBack();assert.equal(elements.menu.open,true,'back from backup returns to settings');restarted.window.LumaBack();assert.equal(elements.home.open,true,'back from a destination returns home');assert.equal(restarted.window.LumaBack(),false,'back on home allows native exit');
elements.homeContinue.onclick();const beforeReset=vm.runInContext('JSON.stringify(placements)',restarted);elements.reset.onclick();assert.equal(elements.resetDialog.open,true);elements.cancelReset.onclick();assert.equal(vm.runInContext('JSON.stringify(placements)',restarted),beforeReset,'cancel reset preserves attempt');elements.reset.onclick();elements.confirmReset.onclick();assert.equal(vm.runInContext('Object.keys(placements).length',restarted),0);elements.undo.onclick();assert.equal(vm.runInContext('JSON.stringify(placements)',restarted),beforeReset,'reset remains undoable');
vm.runInContext("routeView('menu')",restarted);elements.testStep.onclick();assert.equal(elements.menu.open,false,'test results visible on game board');
console.log('PASS: home resume, peer routes, partial progress, chapter filters, empty states, contextual Android back, reset confirmation and visible test actions.');
