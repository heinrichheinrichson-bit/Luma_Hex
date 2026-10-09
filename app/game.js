'use strict';
const $=id=>document.getElementById(id),E=HexEngine,M=HexMotifs,COUNT=M.motifs.length,VARIANTS=M.variants,TOTAL=COUNT*VARIANTS,STORAGE='lumahex-journey-v5';
const colors=[['#adffdf','#4acdb0','#247f83'],['#ffbca9','#ed7c85','#ad426d'],['#ffe6ab','#eabb65','#b37a3c'],['#bfc2ff','#9187de','#5558a1'],['#a6edff','#62badc','#3176a0'],['#f5bcef','#ce7dbd','#8e4d9a'],['#d9f4ac','#a0ce76','#5d9063'],['#ffd7b2','#e49d6b','#a6604e'],['#aaf4ed','#68c9cb','#358c9b'],['#c8d5ff','#8ea4e4','#536d9e'],['#f6dcba','#cdb392','#8b7965'],['#ffd0df','#df95b3','#9b6085']];
function readSave(key){try{const value=JSON.parse(localStorage.getItem(key)||'{}');return value&&typeof value==='object'?value:{};}catch{return {};}}
const legacy=readSave('lumahex-journey-v4'),old=readSave('lumahex-motifs-v2');
const saved=Object.keys(readSave(STORAGE)).length?readSave(STORAGE):{done:legacy.done||[],index:legacy.index||0,sound:legacy.sound??old.sound,vibration:legacy.vibration??old.vibration,introSeen:legacy.introSeen??old.introSeen};
let index=Number.isInteger(saved.index)?Math.max(0,Math.min(TOTAL-1,saved.index)):0;
let data,placements={},history=[],selected=null,hints=0,testUsed=false,drag=null,audioCtx,winTimer,detailMotif=0;
let attempts=saved.attempts&&typeof saved.attempts==='object'?saved.attempts:{};
let done=new Set(Array.isArray(saved.done)?saved.done.filter(n=>Number.isInteger(n)&&n>=0&&n<TOTAL):[]);
let sound=(saved.sound??old.sound)!==false,vibration=(saved.vibration??old.vibration)!==false,introSeen=(saved.introSeen??old.introSeen)===true;
const records=saved.records&&typeof saved.records==='object'?saved.records:{};
const CHAPTERS=['ERSTES LEUCHTEN','KLEINE ENTDECKUNGEN','NEUE WEGE','KLEINE WUNDER','FORMEN IM FLUSS'];
const clone=value=>JSON.parse(JSON.stringify(value));
function persist(){attempts[index]={placements:clone(placements),hints,testUsed};try{localStorage.setItem(STORAGE,JSON.stringify({index,attempts,done:[...done],records,sound,vibration,introSeen}));}catch{}}
function point(q,r,s){return [Math.sqrt(3)*s*(q+r/2),1.5*s*r];}
function polygon(x,y,s){return Array.from({length:6},(_,i)=>{const a=(60*i-30)*Math.PI/180;return `${(x+s*Math.cos(a)).toFixed(2)},${(y+s*Math.sin(a)).toFixed(2)}`;}).join(' ');}
function defs(){return '<defs>'+colors.map((c,i)=>`<linearGradient id="gem${i}" x1="0" y1="0" x2=".7" y2="1"><stop stop-color="${c[0]}"/><stop offset=".48" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>`).join('')+'</defs>';}
function gem(x,y,s,id){const c=colors[id%colors.length];return `<g class="gem"><polygon points="${polygon(x,y+2,s)}" fill="${c[2]}"/><polygon points="${polygon(x,y,s-1)}" fill="url(#gem${id%colors.length})" stroke="${c[0]}" stroke-opacity=".65" stroke-width="1"/><polygon points="${polygon(x,y-1,s*.73)}" fill="none" stroke="#fff" stroke-opacity=".18"/><path d="M${x-s*.83},${y-s*.47} L${x},${y-s*.95} L${x+s*.83},${y-s*.47} L${x},${y-2}Z" fill="#fff" opacity=".13"/></g>`;}
function shapeSVG(p,s=17){const pts=p.shape.map(c=>point(...c,s)),xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),minX=Math.min(...xs)-s-4,minY=Math.min(...ys)-s-4,w=Math.max(...xs)-minX+s+4,h=Math.max(...ys)-minY+s+4;return {html:`<svg viewBox="${minX} ${minY} ${w} ${h}" aria-hidden="true">${defs()}${pts.map(([x,y],i)=>gem(x,y,s-1,p.id)+(i===0?`<circle cx="${x}" cy="${y}" r="2.3" fill="#fff" opacity=".9"/>`:'')).join('')}</svg>`,minX,minY,w,h};}
function motifSVG(motif,lit=true){const cells=M.cells(motif),frame=E.layout({cells});return `<svg viewBox="0 0 400 340" aria-hidden="true">${defs()}${cells.map(([q,r])=>{const [dx,dy]=point(q,r,frame.size),x=frame.x+dx,y=frame.y+dy;return lit?gem(x,y,frame.size-1,M.color(motif,q,r)):`<polygon points="${polygon(x,y,frame.size-1)}" fill="#29434c" stroke="#54717a" stroke-opacity=".3"/>`;}).join('')}</svg>`;}
function unlocked(m){return Array.from({length:VARIANTS},(_,v)=>m+v*COUNT).filter(n=>done.has(n));}
function renderBoard(preview=null){
 const used=E.occupied(data,placements),frame=E.layout(data),s=frame.size,p=data.pieces.find(p=>p.id===selected),valid=preview&&p&&E.fits(data,placements,p.id,preview),keys=new Set(preview&&p?p.shape.map(([q,r])=>E.key(q+preview[0],r+preview[1])):[]);
 $('board').innerHTML=defs()+data.cells.map(([q,r])=>{const [dx,dy]=point(q,r,s),x=frame.x+dx,y=frame.y+dy,id=used.get(E.key(q,r)),highlight=keys.has(E.key(q,r));return `<g data-q="${q}" data-r="${r}"><polygon class="cell" role="button" tabindex="0" aria-label="Feld ${q}, ${r}${id!==undefined?', belegt':''}" points="${polygon(x,y,s-2)}" fill="${highlight?(valid?'#70e4cd35':'#ed7c8535'):'#071e29'}" stroke="${highlight?(valid?'#aaf4d9':'#ed7c85'):'#71999e'}" stroke-opacity="${highlight?1:.48}" stroke-width="${highlight?2:1}"/>${id!==undefined?gem(x,y,s-2,used.size===data.cells.length?M.color(data.motif,q,r):id):`<circle cx="${x}" cy="${y}" r="1.2" fill="#96d0cc" opacity=".15"/>`}</g>`;}).join('');
}
function render(){
 renderBoard();$('levelNumber').textContent=String(index+1).padStart(2,'0');$('levelTitle').textContent=data.motif.name;$('motifSubtitle').textContent=data.motif.subtitle;
 $('chapter').textContent=`KAPITEL ${Math.floor(index/10)+1} · ${CHAPTERS[Math.floor(index/10)]}`;
 const count=E.occupied(data,placements).size;$('progressLabel').textContent=`${count} von ${data.cells.length} Kristallen`;$('progress').style.width=count/data.cells.length*100+'%';$('undo').disabled=!history.length;$('hint').innerHTML=count===data.cells.length?'<span>→</span>Weiter':'<span>✧</span>Hinweis';
 $('stars').textContent=data.pieces.length+' Teile';$('instruction').textContent=selected===null?(index<3?'Weißer Punkt = Ansatzfeld':'Ziehen oder antippen'):'Lichtpunkt auf das Zielfeld setzen';$('trayTitle').textContent=`DEINE ${data.pieces.length} TEILE`;$('tray').classList.toggle('dense',data.pieces.length>8);
 $('tray').innerHTML=data.pieces.map(p=>`<button class="piece${placements[p.id]?' placed':''}${selected===p.id?' selected':''}" data-piece="${p.id}" aria-label="Kristallteil ${p.id+1}, ${p.shape.length} Felder${placements[p.id]?', bereits gesetzt':''}" aria-pressed="${selected===p.id}">${shapeSVG(p).html}</button>`).join('');
 $('collectionCount').textContent=M.motifs.filter((m,i)=>unlocked(i).length).length;persist();
}
function load(n,fresh=false){
 clearTimeout(winTimer);$('board').classList.remove('completed');$('ghost').innerHTML='';drag=null;index=n;data=E.level(n);placements={};const stored=!fresh?attempts[n]:null;
 if(stored&&stored.placements&&typeof stored.placements==='object')for(const p of data.pieces)if(E.fits(data,placements,p.id,stored.placements[p.id]))placements[p.id]=[...stored.placements[p.id]];
 history=[];selected=null;hints=stored?Math.max(0,Number(stored.hints)||0):0;testUsed=stored?.testUsed===true;render();
 if(E.occupied(data,placements).size===data.cells.length)complete(false);
}
function checkpoint(){history.push({placements:clone(placements),hints,testUsed});if(history.length>100)history.shift();}
function tone(win=false){if(!sound)return;try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();(win?[523,659,784,1047]:[523,784]).forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+i*.075;o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.045,t+.015);g.gain.exponentialRampToValueAtTime(.001,t+.45);o.connect(g);g.connect(audioCtx.destination);o.start(t);o.stop(t+.5);});}catch{}}
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2600);}
function feedback(){if(vibration){if(window.LumaFeedback)window.LumaFeedback.vibrate();else if(navigator.vibrate)navigator.vibrate(12);}}
function complete(playSound=true){
 if(E.occupied(data,placements).size!==data.cells.length)return;
 const first=!unlocked(index%COUNT).length;done.add(index);
 const mode=testUsed?'test':hints?'hint':'own',rank={legacy:0,test:1,hint:2,own:3},prior=records[index];
 if(!prior||rank[mode]>rank[prior.mode]||mode===prior.mode&&hints<prior.hints)records[index]={mode,hints};
 persist();$('collectionCount').textContent=M.motifs.filter((m,i)=>unlocked(i).length).length;if(playSound)tone(true);$('board').classList.add('completed');
 $('winArt').innerHTML=motifSVG(data.motif);$('winTitle').textContent=data.motif.name;$('winQuote').textContent=data.motif.quotes[data.variant];
 $('winEyebrow').textContent=testUsed?'TESTANSICHT · VOLLSTÄNDIGES MOTIV':first?'DEIN NEUES LICHTSTÜCK':'SCHÖN, DASS DU WIEDER DA BIST';
 $('winText').textContent=`Level ${index+1} geschafft · ${testUsed?'Automatischer Testlauf':hints===0?'Ganz aus eigener Kraft':hints+' Hinweis'+(hints===1?'':'e')+' genutzt'}`;
 const chapterStart=Math.floor(index/10)*10,chapterDone=Array.from({length:10},(_,i)=>chapterStart+i).every(n=>done.has(n));
 if(chapterDone)$('winText').textContent+=' · Kapitel vollständig';
 $('next').textContent=index===TOTAL-1?'Meine Rätselreise →':index%10===9?'Weiter ins nächste Kapitel →':'Nächstes Motiv →';
 const completedIndex=index;clearTimeout(winTimer);winTimer=setTimeout(()=>{if(index===completedIndex&&E.occupied(data,placements).size===data.cells.length&&!document.querySelector('dialog[open]'))$('win').showModal();},700);
}
function place(id,at){if(!E.fits(data,placements,id,at)){toast('Fast! Dieses Teil passt hier noch nicht.');return false;}checkpoint();placements[id]=at;selected=null;render();tone();feedback();complete();return true;}
function boardScale(){const b=$('board').getBoundingClientRect();return Math.min(b.width/400,b.height/340);}
function cellAt(e){const b=$('board').getBoundingClientRect(),scale=boardScale(),frame=E.layout(data),x=(e.clientX-b.left-(b.width-400*scale)/2)/scale-frame.x,y=(e.clientY-b.top-(b.height-340*scale)/2)/scale-frame.y;let best=null,dist=Infinity;for(const c of data.cells){const [px,py]=point(...c,frame.size),d=Math.hypot(px-x,py-y);if(d<dist){dist=d;best=c;}}return dist<frame.size*1.1?best:null;}
function boardAction(at){if(!at)return;if(selected!==null){place(selected,at);return;}const id=E.occupied(data,placements).get(E.key(...at));if(id!==undefined){clearTimeout(winTimer);$('board').classList.remove('completed');checkpoint();delete placements[id];selected=id;render();}}
$('board').addEventListener('click',e=>boardAction(cellAt(e)));
$('board').addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const g=e.target.closest('[data-q]');if(g){e.preventDefault();boardAction([+g.dataset.q,+g.dataset.r]);}});
$('tray').addEventListener('pointerdown',e=>{const btn=e.target.closest('[data-piece]');if(!btn||placements[+btn.dataset.piece])return;e.preventDefault();drag={id:+btn.dataset.piece,startX:e.clientX,startY:e.clientY,moved:false};btn.setPointerCapture(e.pointerId);});
$('tray').addEventListener('pointermove',e=>{if(!drag)return;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>8)drag.moved=true;if(!drag.moved)return;selected=drag.id;const s=E.layout(data).size*boardScale(),p=data.pieces.find(p=>p.id===drag.id),svg=shapeSVG(p,s),lift=e.pointerType==='touch'?58:0;drag.lift=lift;const ghost=$('ghost');ghost.style.width=svg.w+'px';ghost.style.height=svg.h+'px';ghost.style.left=e.clientX+svg.minX+'px';ghost.style.top=e.clientY-lift+svg.minY+'px';ghost.innerHTML=svg.html;renderBoard(cellAt({clientX:e.clientX,clientY:e.clientY-lift}));});
$('tray').addEventListener('pointerup',e=>{if(!drag)return;const d=drag;drag=null;$('ghost').innerHTML='';if(d.moved){const at=cellAt({clientX:e.clientX,clientY:e.clientY-(d.lift||0)});selected=d.id;if(at)place(d.id,at);render();}else{selected=selected===d.id?null:d.id;render();}});
$('tray').addEventListener('pointercancel',()=>{drag=null;$('ghost').innerHTML='';render();});
$('tray').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const b=e.target.closest('[data-piece]');if(b&&!placements[+b.dataset.piece]){e.preventDefault();selected=+b.dataset.piece;render();}}});
$('undo').onclick=()=>{const last=history.pop();if(!last)return;clearTimeout(winTimer);$('board').classList.remove('completed');placements=last.placements;hints=last.hints;testUsed=last.testUsed;selected=null;render();};
$('reset').onclick=()=>{if(!Object.keys(placements).length)return;clearTimeout(winTimer);$('board').classList.remove('completed');checkpoint();placements={};selected=null;hints=0;testUsed=false;render();toast('Ein frischer Anfang.');};
function testAction(mode){const result=E.autoPlace(data,placements,mode);if(!result){toast('Alle Teile sitzen bereits an ihrem Lösungsplatz.');return;}clearTimeout(winTimer);checkpoint();$('board').classList.remove('completed');placements=result.placements;selected=null;testUsed=true;render();tone();if(mode==='almost')toast('Genau ein Puzzleteil bleibt offen.');else if(mode==='step')toast(result.returned?'Ein Lösungsschritt gesetzt. Überlappende Teile wurden zurückgelegt.':'Ein Lösungsschritt gesetzt.');complete();}
$('testStep').onclick=()=>testAction('step');$('testAlmost').onclick=()=>testAction('almost');$('testFull').onclick=()=>testAction('full');
$('testPrevious').onclick=()=>load((index+TOTAL-1)%TOTAL);$('testNext').onclick=()=>load((index+1)%TOTAL);
$('hint').onclick=()=>{const result=E.hint(data,placements);if(!result){if(index===TOTAL-1)showGallery();else load(index+1);return;}checkpoint();placements=result.placements;selected=null;hints++;render();tone();toast(result.returned?'Ein Teil sitzt richtig. Überlappende Teile liegen wieder unten.':'Ein kleiner Lichtblick für dich.');complete();};
function closeDialogs(){for(const d of document.querySelectorAll('dialog[open]'))d.close();}
function showGallery(){closeDialogs();const count=M.motifs.filter((m,i)=>unlocked(i).length).length;$('galleryProgress').textContent=`${count} von ${COUNT} Formen · ${done.size} von ${TOTAL} Rätseln gelöst`;
 $('galleryGrid').innerHTML=M.motifs.map((m,i)=>{const levels=unlocked(i),lit=levels.length>0;return `<button class="gallery-card${lit?' unlocked':''}" data-motif="${i}" ${lit?'':'disabled'} aria-label="${m.name}, gesammelt${lit?'':' – noch nicht gesammelt'}">${motifSVG(m,lit)}<strong>${m.name}</strong><span>${lit?'Gesammelt':'Noch ein kleines Geheimnis'}</span><div class="collection-dots">${Array.from({length:VARIANTS},(_,v)=>v).map(v=>`<i class="${done.has(i+v*COUNT)?'lit':''}"></i>`).join('')}</div></button>`;}).join('');$('gallery').showModal();
}
function showDetail(m){detailMotif=m;const motif=M.motifs[m],levels=unlocked(m);closeDialogs();$('detailEyebrow').textContent=`DEIN LICHTSTÜCK · EIN EIGENES RÄTSEL`;$('detailArt').innerHTML=motifSVG(motif);$('detailTitle').textContent=motif.name;$('detailQuotes').innerHTML=Array.from({length:VARIANTS},(_,v)=>v).map(v=>`<div class="quote-card${done.has(m+v*COUNT)?' revealed':''}"><span>DEIN MOMENT</span><p>${done.has(m+v*COUNT)?motif.quotes[v]:'Hier wartet noch ein kleiner Moment auf dich.'}</p></div>`).join('');$('detail').showModal();}
$('collection').onclick=showGallery;$('winCollection').onclick=()=>showDetail(index%COUNT);$('closeGallery').onclick=()=>$('gallery').close();$('galleryContinue').onclick=()=>{$('gallery').close();if(E.occupied(data,placements).size===data.cells.length&&index<TOTAL-1)load(index+1);};$('closeDetail').onclick=showGallery;$('detailBack').onclick=showGallery;
$('galleryGrid').onclick=e=>{const card=e.target.closest('[data-motif]');if(card&&!card.disabled)showDetail(+card.dataset.motif);};
$('detailPlay').onclick=()=>{const next=Array.from({length:VARIANTS},(_,v)=>detailMotif+v*COUNT).find(n=>!done.has(n));closeDialogs();load(next??detailMotif,next===undefined);};
$('next').onclick=()=>{closeDialogs();if(index===TOTAL-1)showJourney();else load(index+1);};$('replay').onclick=()=>{closeDialogs();load(index,true);};
function showMenu(){closeDialogs();$('sound').checked=sound;$('vibration').checked=vibration;$('levelSelect').innerHTML=M.motifs.map((m,n)=>(n%10===0?'<div class="chapter-label">KAPITEL '+(Math.floor(n/10)+1)+'</div>':'')+'<button data-level="'+n+'" class="'+(n===index?'active':done.has(n)?'done':'')+'" aria-label="Level '+(n+1)+': '+m.name+'">'+motifSVG(m)+'<span><b>'+String(n+1).padStart(2,'0')+' · '+m.name+'</b><small>'+(done.has(n)?'✓ Gesammelt':attempts[n]&&Object.keys(attempts[n].placements||{}).length?'Angefangen':'Entdecken')+'</small></span></button>').join('');$('menu').showModal();}
$('settings').onclick=showMenu;$('levelSelect').onclick=e=>{const b=e.target.closest('[data-level]');if(b){closeDialogs();load(+b.dataset.level);}};$('closeMenu').onclick=()=>$('menu').close();$('sound').onchange=e=>{sound=e.target.checked;persist();if(sound)tone();};$('vibration').onchange=e=>{vibration=e.target.checked;persist();};
$('start').onclick=()=>{introSeen=true;persist();$('intro').close();tone();};$('intro').addEventListener('cancel',()=>{introSeen=true;persist();});
load(index);
if(!introSeen)$('intro').showModal();
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});

function showJourney(){
 closeDialogs();const next=Array.from({length:TOTAL},(_,i)=>i).find(n=>!done.has(n));
 const own=Object.values(records).filter(r=>r.mode==='own').length,test=Object.values(records).filter(r=>r.mode==='test').length;
 $('journeyProgress').textContent=done.size+' von '+TOTAL+' Lichtstücken gesammelt';
 $('journeyStats').textContent=own+' ohne Hinweise · '+test+' per Testwerkzeug';
 $('journeyContinue').textContent=next===undefined?'Alle Lichtstücke ansehen →':'Weiter mit Rätsel '+String(next+1).padStart(2,'0')+' →';
 $('journeyContinue').onclick=()=>{if(next===undefined)showGallery();else{closeDialogs();load(next);}};
 $('journeyChapters').innerHTML=Array.from({length:Math.ceil(TOTAL/10)},(_,i)=>i).map(ch=>{const start=ch*10,solved=Array.from({length:10},(_,i)=>start+i).filter(n=>done.has(n)).length;return '<section class="journey-chapter"><span class="eyebrow">KAPITEL '+(ch+1)+' · '+solved+'/10</span><h3>'+CHAPTERS[ch].toLocaleLowerCase('de-DE')+'</h3><div class="journey-levels">'+M.motifs.slice(start,start+10).map((m,i)=>{const n=start+i;return '<button data-journey="'+n+'" class="journey-level '+(done.has(n)?'solved':'')+' '+(n===index?'current':'')+'" aria-label="Rätsel '+(n+1)+': '+m.name+(done.has(n)?', gelöst':'')+'">'+motifSVG(m,done.has(n))+'<b>'+String(n+1).padStart(2,'0')+'</b><span>'+m.name+'</span><small>'+(done.has(n)?recordLabel(n):attempts[n]&&Object.keys(attempts[n].placements||{}).length?'Angefangen':'Entdecken')+'</small></button>';}).join('')+'</div></section>';}).join('');
 $('journey').showModal();
}
document.querySelector('.brand').onclick=e=>{e.preventDefault();showJourney();};
 $('openJourney').onclick=showJourney;$('closeJourney').onclick=()=>$('journey').close();
 $('journeyChapters').onclick=e=>{const button=e.target.closest('[data-journey]');if(button){closeDialogs();load(+button.dataset.journey);}};

function recordLabel(n){const mode=records[n]?.mode;return mode==='own'?'✦ Ohne Hinweise':mode==='hint'?'✓ Mit Hinweis':mode==='test'?'⚙ Testansicht':'✓ Gesammelt';}
function showBackup(){closeDialogs();persist();$('backupCode').value=HexSave.encode(readSave(STORAGE));$('backupStatus').textContent='Die Sicherung enthält deine Sammlung, Einstellungen und angefangenen Rätsel.';$('restorePreview').hidden=true;$('confirmRestore').hidden=true;pendingRestore=null;$('backup').showModal();}
let pendingRestore=null;
function inspectBackup(text){try{pendingRestore=HexSave.decode(text);$('backupCode').value=text;$('restorePreview').textContent=pendingRestore.done.length+' gesammelte Lichtstücke · weiter bei Rätsel '+(pendingRestore.index+1)+'. Beim Übernehmen wird der aktuelle Spielstand ersetzt.';$('restorePreview').hidden=false;$('confirmRestore').hidden=false;$('backupStatus').textContent='Sicherung geprüft. Du kannst sie jetzt übernehmen.';}catch(error){pendingRestore=null;$('confirmRestore').hidden=true;$('restorePreview').hidden=true;$('backupStatus').textContent=error.message;}}
window.LumaReceiveBackup=text=>{showBackup();inspectBackup(text);};
$('openBackup').onclick=showBackup;$('closeBackup').onclick=()=>$('backup').close();
$('checkBackup').onclick=()=>inspectBackup($('backupCode').value);
$('backupCode').oninput=()=>{pendingRestore=null;$('confirmRestore').hidden=true;$('restorePreview').hidden=true;$('backupStatus').textContent='Geänderten Code bitte erneut prüfen.';};
$('confirmRestore').onclick=()=>{if(!pendingRestore)return;try{localStorage.setItem(STORAGE,JSON.stringify(pendingRestore));location.reload();}catch{$('backupStatus').textContent='Der Spielstand konnte nicht gespeichert werden.';}};
$('copyBackup').onclick=async()=>{try{if(navigator.clipboard?.writeText){await navigator.clipboard.writeText($('backupCode').value);$('backupStatus').textContent='Sicherungscode kopiert.';}else{$('backupCode').focus();$('backupCode').select();$('backupStatus').textContent='Code markiert. Über das Textmenü kopieren.';}}catch{$('backupCode').focus();$('backupCode').select();$('backupStatus').textContent='Code markiert. Über das Textmenü kopieren.';}};
$('saveBackupFile').onclick=()=>{persist();const text=HexSave.encode(readSave(STORAGE));if(window.LumaFeedback?.saveBackup){window.LumaFeedback.saveBackup(text);return;}const blob=new Blob([text],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download='Luma-Hex-Spielstand.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);};
$('loadBackupFile').onclick=()=>{if(window.LumaFeedback?.openBackup){window.LumaFeedback.openBackup();return;}$('backupFile').click();};
$('backupFile').onchange=async e=>{const file=e.target.files[0];if(!file)return;if(file.size>1000000){$('backupStatus').textContent='Die Sicherung ist zu groß.';return;}try{inspectBackup(await file.text());}catch{$('backupStatus').textContent='Die Datei konnte nicht gelesen werden.';}e.target.value='';};

document.addEventListener('visibilitychange',()=>{if(document.hidden)persist();});
