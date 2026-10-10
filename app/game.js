'use strict';
const $=id=>document.getElementById(id),E=HexEngine,M=HexMotifs,COUNT=M.motifs.length,VARIANTS=M.variants,TOTAL=COUNT*VARIANTS,STORAGE='lumahex-journey-v5',C=HexCurriculum,ORDER=C.order;
const chapterOf=n=>Math.floor(C.position[n]/10),chapterItems=ch=>ORDER.slice(ch*10,ch*10+10),numberOf=n=>String(C.position[n]+1).padStart(2,'0');
const colors=['#79dfc1','#fb9caa','#b4a4f0','#b5dd82','#f5cc80','#83bce9','#d7ade7','#f0b786','#79d4d6','#a3b8ef','#d8c7a1','#ecaccc'].map(c=>[c,c,'#2c6570']);
function readSave(key){try{const value=JSON.parse(localStorage.getItem(key)||'{}');return value&&typeof value==='object'?value:{};}catch{return {};}}
const legacy=readSave('lumahex-journey-v4'),old=readSave('lumahex-motifs-v2');
const saved=Object.keys(readSave(STORAGE)).length?readSave(STORAGE):{done:legacy.done||[],index:legacy.index||0,sound:legacy.sound??old.sound,vibration:legacy.vibration??old.vibration,introSeen:legacy.introSeen??old.introSeen};
let index=Number.isInteger(saved.index)?Math.max(0,Math.min(TOTAL-1,saved.index)):0;
let data,placements={},history=[],selected=null,hints=0,testUsed=false,drag=null,audioCtx,winTimer,detailMotif=0;
let attempts=saved.attempts&&typeof saved.attempts==='object'?saved.attempts:{};
let done=new Set(Array.isArray(saved.done)?saved.done.filter(n=>Number.isInteger(n)&&n>=0&&n<TOTAL):[]);
let sound=(saved.sound??old.sound)!==false,vibration=(saved.vibration??old.vibration)!==false,introSeen=(saved.introSeen??old.introSeen)===true;
let tutorialIndex=null,tutorialProgress=Number.isInteger(saved.tutorialProgress)?Math.max(0,Math.min(6,saved.tutorialProgress)):(done.size||introSeen?6:0);
const records=saved.records&&typeof saved.records==='object'?saved.records:{};
const CHAPTERS=['ERSTES LEUCHTEN','KLEINE ENTDECKUNGEN','NEUE WEGE','KLEINE WUNDER','FORMEN IM FLUSS','WEGE UND ANKER',"KRISTALLPFADE","FLUSS DER FORMEN","STILLE INSELN","WEITE BÖGEN","WABENWERK","NORDLICHT","SONNENWINKEL","KURVEN UND KANTEN","ZWISCHENWELTEN","FARBKLANG","LICHTFENSTER","UMWEGE","BRÜCKENSPIEL","MUSTERPAUSE","FORMENLABYRINTH","SILBERLINIEN","GEDANKENREISE","KLARER BLICK","RANDNOTIZEN","LICHTGEFLECHT","NEUE UFER","RUHIGE MITTE","FUNKENPFADE","WEITER HORIZONT"];
let dragGap=Math.max(24,Math.min(100,Number(saved.dragGap)||48)),suppressBoardClickUntil=0;
const clone=value=>JSON.parse(JSON.stringify(value));
function persist(){if(tutorialIndex===null)attempts[index]={placements:clone(placements),hints,testUsed};try{localStorage.setItem(STORAGE,JSON.stringify({index,attempts,done:[...done],records,dragGap,sound,vibration,introSeen,tutorialProgress}));}catch{}}
function point(q,r,s){return [Math.sqrt(3)*s*(q+r/2),1.5*s*r];}
function polygon(x,y,s){return Array.from({length:6},(_,i)=>{const a=(60*i-30)*Math.PI/180;return `${(x+s*Math.cos(a)).toFixed(2)},${(y+s*Math.sin(a)).toFixed(2)}`;}).join(' ');}
function defs(){return '<defs>'+colors.map((c,i)=>`<linearGradient id="gem${i}" x1="0" y1="0" x2=".7" y2="1"><stop stop-color="${c[0]}"/><stop offset=".48" stop-color="${c[1]}"/><stop offset="1" stop-color="${c[2]}"/></linearGradient>`).join('')+'</defs>';}
function anchorTile(x,y,s){return '<g aria-label="Blockiertes Feld"><polygon points="'+polygon(x,y+2,s-1)+'" fill="#030b17"/><polygon points="'+polygon(x,y,s-1)+'" fill="#2e4056" stroke="#829bb5" stroke-width="1.5"/><polygon points="'+polygon(x,y,s*.67)+'" fill="#172638" stroke="#475c73"/><path d="M'+(x-s*.3)+','+(y-s*.3)+' L'+(x+s*.3)+','+(y+s*.3)+' M'+(x+s*.3)+','+(y-s*.3)+' L'+(x-s*.3)+','+(y+s*.3)+'" stroke="#a4b8c8" stroke-width="2" stroke-linecap="round"/></g>';}
function roundedHex(x,y,s){const pts=Array.from({length:6},(_,i)=>{const a=(i*60-30)*Math.PI/180;return [x+s*Math.cos(a),y+s*Math.sin(a)];});return pts.map((p,i)=>{const a=pts[(i+5)%6],b=pts[(i+1)%6];return (i?'L':'M')+[p[0]+(a[0]-p[0])*.1,p[1]+(a[1]-p[1])*.1].join(',')+'Q'+p.join(',')+' '+[p[0]+(b[0]-p[0])*.1,p[1]+(b[1]-p[1])*.1].join(',');}).join('')+'Z';}
function gem(x,y,s,id){const c=colors[id%colors.length];return '<g class="gem"><path d="'+roundedHex(x,y+3,s-2)+'" fill="#08202b"/><path d="'+roundedHex(x,y,s-2)+'" fill="url(#gem'+id%colors.length+')" stroke="'+c[0]+'" stroke-width="1.2"/><path d="'+roundedHex(x,y,s-6)+'" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width=".7"/><path d="M'+(x-s*.63)+','+(y-s*.43)+'L'+x+','+(y-s*.81)+'L'+(x+s*.63)+','+(y-s*.43)+'" fill="none" stroke="#fff" stroke-opacity=".65" stroke-width="1.4" stroke-linecap="round"/></g>';}
function shapeSVG(p,s=17){const pts=p.shape.map(c=>point(...c,s)),xs=pts.map(p=>p[0]),ys=pts.map(p=>p[1]),minX=Math.min(...xs)-s-4,minY=Math.min(...ys)-s-4,w=Math.max(...xs)-minX+s+4,h=Math.max(...ys)-minY+s+4;return {html:`<svg viewBox="${minX} ${minY} ${w} ${h}" aria-hidden="true">${defs()}${pts.map(([x,y],i)=>gem(x,y,s-1,p.id)+(i===0?`<circle cx="${x}" cy="${y}" r="2.3" fill="#fff" opacity=".9"/>`:'')).join('')}</svg>`,minX,minY,w,h};}
function motifSVG(motif,lit=true){const cells=M.cells(motif),frame=E.layout({cells,motif});return `<svg viewBox="0 0 400 340" aria-hidden="true">${defs()}${cells.map(([q,r])=>{const [dx,dy]=point(q,r,frame.size),x=frame.x+dx,y=frame.y+dy;return lit?gem(x,y,frame.size-1,M.color(motif,q,r)):`<polygon points="${polygon(x,y,frame.size-1)}" fill="#29434c" stroke="#54717a" stroke-opacity=".3"/>`;}).join('')}${(motif.blocked||[]).map(([q,r])=>{const [x,y]=point(q,r,frame.size);return anchorTile(frame.x+x,frame.y+y,frame.size-1);}).join('')}</svg>`;}
function unlocked(m){return Array.from({length:VARIANTS},(_,v)=>m+v*COUNT).filter(n=>done.has(n));}
function renderBoard(preview=null,exceptId=null){
 const used=E.occupied(data,placements,exceptId),frame=E.layout(data),s=frame.size,p=data.pieces.find(p=>p.id===selected),valid=preview&&p&&E.fits(data,placements,p.id,preview),keys=new Set(preview&&p?p.shape.map(([q,r])=>E.key(q+preview[0],r+preview[1])):[]);
 $('board').innerHTML=defs()+data.cells.map(([q,r])=>{const [dx,dy]=point(q,r,s),x=frame.x+dx,y=frame.y+dy,id=used.get(E.key(q,r)),highlight=keys.has(E.key(q,r));return `<g data-q="${q}" data-r="${r}"><polygon class="cell" role="button" tabindex="0" aria-label="Feld ${q}, ${r}${id!==undefined?', belegt':''}" points="${polygon(x,y,s-2)}" fill="${highlight?(valid?'#70e4cd35':'#ed7c8535'):'#071e29'}" stroke="${highlight?(valid?'#aaf4d9':'#ed7c85'):'#71999e'}" stroke-opacity="${highlight?1:.48}" stroke-width="${highlight?2:1}"/>${id!==undefined?gem(x,y,s-2,used.size===data.cells.length?M.color(data.motif,q,r):id):`<circle cx="${x}" cy="${y}" r="1.2" fill="#96d0cc" opacity=".15"/>`}</g>`;}).join('')+(data.motif.blocked||[]).map(([q,r])=>{const [x,y]=point(q,r,s);return anchorTile(frame.x+x,frame.y+y,s-2);}).join('');
}
function render(){
 renderBoard();$('levelNumber').textContent=tutorialIndex===null?numberOf(index):String(tutorialIndex+1).padStart(2,'0');$('levelTitle').textContent=data.motif.name;$('motifSubtitle').textContent=data.motif.subtitle;
 $('chapter').textContent=tutorialIndex===null?C.stages.find(s=>s.id===C.byIndex[index].stage).name.toUpperCase()+' · KAPITEL '+(chapterOf(index)+1):'ERSTE SCHRITTE · '+(tutorialIndex+1)+' VON 6';
 $('lessonGuide').hidden=tutorialIndex===null;if(tutorialIndex!==null){$('lessonText').textContent=C.lessons[tutorialIndex].text;$('lessonProgress').textContent='Dein Lernschritt '+(tutorialIndex+1)+' / 6';}
 $('winCollection').hidden=tutorialIndex!==null;
 const count=E.occupied(data,placements).size;$('progressLabel').textContent=`${count} von ${data.cells.length} Kristallen`;$('progress').style.width=count/data.cells.length*100+'%';$('undo').disabled=!history.length;$('hint').innerHTML=count===data.cells.length?"<span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M5 12h14m-6-6 6 6-6 6\"/></svg></span>Weiter":"<span><svg viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"1.8\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M9 18h6M10 22h4M8 12a6 6 0 1 1 8 0l-1 3H9Z\"/></svg></span>Hinweis";
 $('stars').textContent=data.pieces.length+' Teile';$('instruction').textContent=selected===null?(index<3?'Weißer Punkt = Ansatzfeld':'Ziehen oder antippen'):'Lichtpunkt auf das Zielfeld setzen';$('trayTitle').textContent=`DEINE ${data.pieces.length} TEILE`;$('tray').classList.toggle('dense',data.pieces.length>8);
 $('tray').innerHTML=data.pieces.map(p=>`<button class="piece${placements[p.id]?' placed':''}${selected===p.id?' selected':''}" data-piece="${p.id}" aria-label="Kristallteil ${p.id+1}, ${p.shape.length} Felder${placements[p.id]?', bereits gesetzt':''}" aria-pressed="${selected===p.id}">${shapeSVG(p).html}</button>`).join('');
 $('collectionCount').textContent=M.motifs.filter((m,i)=>unlocked(i).length).length;$('boardCaption').textContent=data.motif.blocked?.length?data.motif.blocked.length+' feste Anker · freie Felder füllen':'Teile setzen, verschieben und ausprobieren';persist();
}
function load(n,fresh=false){
 tutorialIndex=null;
 clearTimeout(winTimer);$('board').classList.remove('completed');$('ghost').innerHTML='';drag=null;index=n;data=E.level(n);placements={};const stored=!fresh?attempts[n]:null;
 if(stored&&stored.placements&&typeof stored.placements==='object')for(const p of data.pieces)if(E.fits(data,placements,p.id,stored.placements[p.id]))placements[p.id]=[...stored.placements[p.id]];
 window.scrollTo?.({top:0,behavior:'instant'});history=[];selected=null;hints=stored?Math.max(0,Number(stored.hints)||0):0;testUsed=stored?.testUsed===true;render();
 if(E.occupied(data,placements).size===data.cells.length)complete(false);
}
function checkpoint(){history.push({placements:clone(placements),hints,testUsed});if(history.length>100)history.shift();}
function tone(win=false){if(!sound)return;try{audioCtx=audioCtx||new (window.AudioContext||window.webkitAudioContext)();if(audioCtx.state==='suspended')audioCtx.resume();(win?[523,659,784,1047]:[523,784]).forEach((f,i)=>{const o=audioCtx.createOscillator(),g=audioCtx.createGain(),t=audioCtx.currentTime+i*.075;o.type='sine';o.frequency.value=f;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.045,t+.015);g.gain.exponentialRampToValueAtTime(.001,t+.45);o.connect(g);g.connect(audioCtx.destination);o.start(t);o.stop(t+.5);});}catch{}}
function toast(text){$('toast').textContent=text;$('toast').classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>$('toast').classList.remove('show'),2600);}
function feedback(){if(vibration){if(window.LumaFeedback)window.LumaFeedback.vibrate();else if(navigator.vibrate)navigator.vibrate(12);}}
function complete(playSound=true){
 if(tutorialIndex!==null){completeLesson(playSound);return;}
 if(E.occupied(data,placements).size!==data.cells.length)return;
 const first=!unlocked(index%COUNT).length;done.add(index);
 const mode=testUsed?'test':hints?'hint':'own',rank={legacy:0,test:1,hint:2,own:3},prior=records[index];
 if(!prior||rank[mode]>rank[prior.mode]||mode===prior.mode&&hints<prior.hints)records[index]={mode,hints};
 persist();$('collectionCount').textContent=M.motifs.filter((m,i)=>unlocked(i).length).length;if(playSound)tone(true);$('board').classList.add('completed');
 $('winArt').innerHTML=motifSVG(data.motif);$('winTitle').textContent=data.motif.name;$('winQuote').textContent=data.motif.quotes[data.variant];
 $('winEyebrow').textContent=testUsed?'TESTANSICHT · VOLLSTÄNDIGES MOTIV':first?'DEIN NEUES LICHTSTÜCK':'SCHÖN, DASS DU WIEDER DA BIST';
 $('winText').textContent=`Rätsel ${numberOf(index)} geschafft · ${testUsed?'Automatischer Testlauf':hints===0?'Ganz aus eigener Kraft':hints+' Hinweis'+(hints===1?'':'e')+' genutzt'}`;
 const chapterDone=chapterItems(chapterOf(index)).every(n=>done.has(n));
 if(chapterDone)$('winText').textContent+=' · Kapitel vollständig';
 const nextPuzzle=nextUnsolved(index+1);$('next').innerHTML=nextPuzzle===undefined?'Meine Rätselreise':'<span class="next-preview" aria-hidden="true">'+motifSVG(M.motifs[nextPuzzle],false)+'</span><span>Rätsel '+numberOf(nextPuzzle)+' spielen</span>';
 const completedIndex=index;clearTimeout(winTimer);winTimer=setTimeout(()=>{if(index===completedIndex&&E.occupied(data,placements).size===data.cells.length&&!document.querySelector('dialog[open]'))$('win').showModal();},700);
}
function place(id,at){const moving=!!placements[id];if(!E.fits(data,placements,id,at)){toast('Fast! Dieses Teil passt hier noch nicht.');return false;}checkpoint();placements[id]=at;selected=null;render();tone();feedback();if(tutorialIndex===2&&moving)toast('Genau – gesetzte Teile darfst du jederzeit verschieben.');complete();return true;}
function boardScale(){const b=$('board').getBoundingClientRect();return Math.min(b.width/400,b.height/340);}
function cellAt(e){const b=$('board').getBoundingClientRect(),scale=boardScale(),frame=E.layout(data),x=(e.clientX-b.left-(b.width-400*scale)/2)/scale-frame.x,y=(e.clientY-b.top-(b.height-340*scale)/2)/scale-frame.y;let best=null,dist=Infinity;for(const c of data.cells){const [px,py]=point(...c,frame.size),d=Math.hypot(px-x,py-y);if(d<dist){dist=d;best=c;}}return dist<frame.size*1.1?best:null;}
function boardAction(at){if(!at)return;if(selected!==null){place(selected,at);return;}const id=E.occupied(data,placements).get(E.key(...at));if(id!==undefined){clearTimeout(winTimer);$('board').classList.remove('completed');checkpoint();delete placements[id];selected=id;render();}}
$('board').addEventListener('click',e=>{if(Date.now()<suppressBoardClickUntil)return;boardAction(cellAt(e));});
$('board').addEventListener('keydown',e=>{if(e.key!=='Enter'&&e.key!==' ')return;const g=e.target.closest('[data-q]');if(g){e.preventDefault();boardAction([+g.dataset.q,+g.dataset.r]);}});

function beginDrag(e,id,source,grab=[0,0]){e.preventDefault();drag={id,source,grab,startX:e.clientX,startY:e.clientY,pointerId:e.pointerId,touch:e.pointerType==='touch'||e.pointerType==='pen',moved:false};$(source).setPointerCapture(e.pointerId);}
$('tray').addEventListener('pointerdown',e=>{const button=e.target.closest('[data-piece]');if(!button||placements[+button.dataset.piece])return;beginDrag(e,+button.dataset.piece,'tray');});
$('board').addEventListener('pointerdown',e=>{suppressBoardClickUntil=0;if(selected!==null)return;const at=cellAt(e);if(!at)return;const id=E.occupied(data,placements).get(E.key(...at));if(id===undefined)return;const p=data.pieces.find(p=>p.id===id),home=placements[id],s=E.layout(data).size*boardScale();beginDrag(e,id,'board',point(at[0]-home[0],at[1]-home[1],s));});
function moveDrag(e){if(!drag||e.pointerId!==drag.pointerId)return;if(Math.hypot(e.clientX-drag.startX,e.clientY-drag.startY)>7)drag.moved=true;if(!drag.moved)return;e.preventDefault();selected=drag.id;const p=data.pieces.find(p=>p.id===drag.id),s=E.layout(data).size*boardScale(),svg=shapeSVG(p,s),anchor=E.dragPosition(svg,e.clientX,e.clientY,drag.touch,dragGap,drag.grab);drag.anchor=anchor;
 const ghost=$('ghost');ghost.style.width=svg.w+'px';ghost.style.height=svg.h+'px';ghost.style.left=anchor.x+svg.minX+'px';ghost.style.top=anchor.y+svg.minY+'px';ghost.innerHTML=svg.html;
 const at=cellAt({clientX:anchor.x,clientY:anchor.y});drag.target=at;const valid=at&&E.fits(data,placements,drag.id,at);ghost.classList.toggle('invalid-drop',!!at&&!valid);renderBoard(at,drag.id);
}
function finishDrag(e,cancel=false){if(!drag||e.pointerId!==drag.pointerId)return;if(drag.moved&&!cancel)moveDrag(e);const d=drag;drag=null;$('ghost').innerHTML='';$('ghost').classList.remove('invalid-drop');suppressBoardClickUntil=Date.now()+350;
 if(cancel){selected=null;render();return;}
 if(!d.moved){if(d.source==='board'){selected=null;boardAction(cellAt(e));}else{selected=selected===d.id?null:d.id;render();}return;}
 const at=d.target;if(at&&E.fits(data,placements,d.id,at)){place(d.id,at);return;}
 // The floated anchor defines the board target, including the configured finger gap.
 const tray=$('tray').getBoundingClientRect(),overTray=e.clientX>=tray.left&&e.clientX<=tray.right&&e.clientY>=tray.top&&e.clientY<=tray.bottom;
 if(d.source==='board'&&(!at||overTray)){checkpoint();delete placements[d.id];selected=null;clearTimeout(winTimer);$('board').classList.remove('completed');render();if(tutorialIndex===3)toast('Genau! Das Teil liegt wieder unten. Setze es jetzt neu.');return;}
 selected=null;render();if(at)toast(d.source==='board'?'Hier passt es noch nicht. Das Teil bleibt an seinem bisherigen Platz.':'Hier passt das Teil noch nicht. Probiere eine andere Stelle.');
}
document.addEventListener('pointermove',moveDrag,{passive:false});document.addEventListener('pointerup',e=>finishDrag(e));document.addEventListener('pointercancel',e=>finishDrag(e,true));
$('tray').addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){const b=e.target.closest('[data-piece]');if(b&&!placements[+b.dataset.piece]){e.preventDefault();selected=+b.dataset.piece;render();}}});
$('undo').onclick=()=>{const last=history.pop();if(!last)return;clearTimeout(winTimer);$('board').classList.remove('completed');placements=last.placements;hints=last.hints;testUsed=last.testUsed;selected=null;render();};
$('reset').onclick=()=>{if(!Object.keys(placements).length)return;$('resetDialog').showModal();};$('cancelReset').onclick=()=>$('resetDialog').close();$('confirmReset').onclick=()=>{$('resetDialog').close();clearTimeout(winTimer);$('board').classList.remove('completed');checkpoint();placements={};selected=null;hints=0;testUsed=false;render();toast('Ein frischer Anfang.');};
function testAction(mode){closeDialogs();const result=E.autoPlace(data,placements,mode);if(!result){toast('Alle Teile sitzen bereits an ihrem Lösungsplatz.');return;}clearTimeout(winTimer);checkpoint();$('board').classList.remove('completed');placements=result.placements;selected=null;testUsed=true;render();tone();if(mode==='almost')toast('Genau ein Puzzleteil bleibt offen.');else if(mode==='step')toast(result.returned?'Ein Lösungsschritt gesetzt. Überlappende Teile wurden zurückgelegt.':'Ein Lösungsschritt gesetzt.');complete();}
$('testStep').onclick=()=>testAction('step');$('testAlmost').onclick=()=>testAction('almost');$('testFull').onclick=()=>testAction('full');
$('testPrevious').onclick=()=>{closeDialogs();load(ORDER[(C.position[index]+TOTAL-1)%TOTAL]);};$('testNext').onclick=()=>{closeDialogs();load(ORDER[(C.position[index]+1)%TOTAL]);};
$('hint').onclick=()=>{const result=E.hint(data,placements);if(!result){continuePuzzle(index+1);return;}checkpoint();placements=result.placements;selected=null;hints++;render();tone();toast(result.returned?'Ein Teil sitzt richtig. Überlappende Teile liegen wieder unten.':'Ein kleiner Lichtblick für dich.');complete();};
function closeDialogs(){for(const d of document.querySelectorAll('dialog[open]'))d.close();}
function nextUnsolved(){return ORDER.find(n=>!done.has(n));}
function continuePuzzle(start=index){if(tutorialIndex!==null){if(E.occupied(data,placements).size===data.cells.length)advanceLesson();else closeDialogs();return;}if(tutorialProgress<6){loadLesson(tutorialProgress);return;}const next=nextUnsolved(0);closeDialogs();if(next===undefined)showJourney();else if(next!==index)load(next);}
let galleryPage=0;
function collectedMotifs(){return M.motifs.map((_,i)=>i).filter(i=>unlocked(i).length);}
function showGallery(){closeDialogs();const collected=collectedMotifs(),pages=Math.max(1,Math.ceil(collected.length/20));galleryPage=Math.min(galleryPage,pages-1);$('galleryProgress').textContent=collected.length+' Lichtstücke gesammelt';
 $('galleryPrevious').disabled=galleryPage===0;$('galleryNext').disabled=galleryPage+1>=pages;$('galleryPage').textContent=(galleryPage+1)+' / '+pages;
 $('galleryGrid').innerHTML=collected.slice(galleryPage*20,galleryPage*20+20).map(n=>{const m=M.motifs[n];return '<button class="gallery-card unlocked" data-motif="'+n+'" aria-label="'+m.name+', gesammelt">'+motifSVG(m,true)+'<strong>'+m.name+'</strong><span>'+numberOf(n)+' · '+recordLabel(n)+'</span></button>';}).join('')||'<div class="empty-state"><p>Dein erstes Lichtstück wartet auf dich. Löse eine Form – hier bekommt sie ihren Platz.</p></div>';$('gallery').showModal();}
$('galleryPrevious').onclick=()=>{if(galleryPage){galleryPage--;showGallery();}};$('galleryNext').onclick=()=>{if((galleryPage+1)*20<collectedMotifs().length){galleryPage++;showGallery();}};
function showDetail(m){galleryPage=Math.floor(Math.max(0,collectedMotifs().indexOf(m))/20);detailMotif=m;const motif=M.motifs[m],levels=unlocked(m);closeDialogs();$('detailEyebrow').textContent=C.stages.find(s=>s.id===C.byIndex[m].stage).name+' · '+C.byIndex[m].form;$('detailArt').innerHTML=motifSVG(motif);$('detailTitle').textContent=motif.name;$('detailQuotes').innerHTML=Array.from({length:VARIANTS},(_,v)=>v).map(v=>`<div class="quote-card${done.has(m+v*COUNT)?' revealed':''}"><span>DEIN MOMENT</span><p>${done.has(m+v*COUNT)?motif.quotes[v]:'Hier wartet noch ein kleiner Moment auf dich.'}</p></div>`).join('');$('detail').showModal();}
$('collection').onclick=showGallery;$('winCollection').onclick=()=>showDetail(index%COUNT);$('closeGallery').onclick=()=>$('gallery').close();$('galleryContinue').onclick=()=>{continuePuzzle();};$('closeDetail').onclick=showGallery;$('detailBack').onclick=showGallery;
$('galleryGrid').onclick=e=>{const card=e.target.closest('[data-motif]');if(card&&!card.disabled)showDetail(+card.dataset.motif);};
$('detailPlay').textContent='Noch einmal spielen →';
$('detailPlay').onclick=()=>{const next=Array.from({length:VARIANTS},(_,v)=>detailMotif+v*COUNT).find(n=>!done.has(n));closeDialogs();load(next??detailMotif,next===undefined);};
$('next').onclick=()=>{continuePuzzle(index+1);};$('replay').onclick=()=>{closeDialogs();if(tutorialIndex!==null)loadLesson(tutorialIndex);else load(index,true);};
function showMenu(){closeDialogs();$('sound').checked=sound;$('vibration').checked=vibration;$('dragGap').value=dragGap;$('dragGapValue').textContent=dragGap+' px';$('levelSelect').innerHTML='<p class="fine-print">'+TOTAL+' unterschiedliche Rätsel · '+Math.ceil(TOTAL/10)+' Kapitel<br>Alle Spielfelder findest du in deiner Rätselreise.</p>';$('menu').showModal();}
$('settings').onclick=showMenu;$('levelSelect').onclick=e=>{const b=e.target.closest('[data-level]');if(b){closeDialogs();load(+b.dataset.level);}};$('closeMenu').onclick=()=>$('menu').close();$('sound').onchange=e=>{sound=e.target.checked;persist();if(sound)tone();};$('vibration').onchange=e=>{vibration=e.target.checked;persist();};
$('start').onclick=()=>{introSeen=true;persist();$('intro').close();tone();};$('intro').addEventListener('cancel',()=>{introSeen=true;persist();});
load(nextUnsolved(0)??index);
if(!introSeen)$('intro').showModal();
if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});

let journeyChapter=0;
function frontier(){return nextUnsolved(0);}
function accessible(n){return (tutorialProgress===6&&n===frontier())||done.has(n)||Object.keys(attempts[n]?.placements||{}).length>0;}
function chapterAccessible(ch){const first=frontier();return ch===chapterOf(first??ORDER[TOTAL-1])||chapterItems(ch).some(accessible);}
function pathMarkup(items){const first=frontier(),height=items.length*124+28;let road='';const nodes=items.map((n,i)=>({n,x:i%2?258:116,y:66+i*124}));nodes.forEach((v,i)=>{if(!i)road='M'+v.x+','+(v.y-38)+'L'+v.x+','+v.y;else {const p=nodes[i-1];road+='C'+p.x+','+(p.y+68)+' '+v.x+','+(v.y-68)+' '+v.x+','+v.y;}});return '<div class="puzzle-path" style="height:'+height+'px"><svg class="path-road" viewBox="0 0 390 '+height+'" preserveAspectRatio="none" aria-hidden="true"><path d="'+road+'" fill="none" stroke="#061d28" stroke-width="16" stroke-linecap="round"/><path d="'+road+'" fill="none" stroke="#466b79" stroke-width="7" stroke-linecap="round"/><path d="'+road+'" fill="none" stroke="#8aadae" stroke-opacity=".4" stroke-width="1.5" stroke-dasharray="2 10" stroke-linecap="round"/></svg>'+nodes.map(({n,x,y})=>{const open=accessible(n),current=n===first,solved=done.has(n),size=current?44:35;return '<button data-journey="'+n+'" '+(open?'':'disabled')+' class="journey-level path-node '+(solved?'solved ':'')+(current?'current ':'')+(!open?'locked':'')+'" style="left:'+x/390*100+'%;top:'+y+'px" aria-label="Rätsel '+numberOf(n)+(solved?', gelöst':current?', jetzt spielen':open?', angefangen':', gesperrt')+'"><svg viewBox="0 0 110 110" aria-hidden="true">'+defs()+(current?'<circle cx="55" cy="52" r="50" fill="#b4a4f0" fill-opacity=".05" stroke="#c4b6ff" stroke-opacity=".3" stroke-dasharray="2 6"/>':'')+(open?gem(55,52,size,solved?0:2):'<path d="'+roundedHex(55,55,34)+'" fill="#09212e"/><path d="'+roundedHex(55,52,34)+'" fill="#28434e" stroke="#54717c" stroke-width="1.5"/><path d="'+roundedHex(55,52,28)+'" fill="none" stroke="#6d8992" stroke-opacity=".25"/>')+(solved?'<path d="m42 52 9 9 18-20" fill="none" stroke="#184f4d" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>':open?'<text x="55" y="59" text-anchor="middle" font-family="Segoe UI,sans-serif" font-size="23" fill="#353858" font-weight="750">'+numberOf(n)+'</text>':'<path d="M49 50v-4a6 6 0 0 1 12 0v4m-15 0h18v14H46Z" fill="none" stroke="#8ba2ac" stroke-width="2" stroke-linejoin="round"/><circle cx="55" cy="57" r="1.5" fill="#8ba2ac"/>')+'</svg><b>'+numberOf(n)+'</b><span>'+(current?'Jetzt spielen →':solved?'Geschafft':open?'Weiterprobieren':'Rätsel '+numberOf(n))+'</span><small>'+(solved?recordLabel(n):'')+'</small></button>';}).join('')+'</div>';}
function renderJourneyChapter(){
 const start=journeyChapter*10,end=Math.min(TOTAL,start+10),solved=chapterItems(journeyChapter).filter(n=>done.has(n)).length,first=frontier(),activeChapter=chapterOf(first??ORDER[TOTAL-1]);
 $('journeyPrevious').disabled=!Array.from({length:journeyChapter},(_,i)=>i).some(chapterAccessible);$('journeyNext').disabled=!Array.from({length:CHAPTERS.length-journeyChapter-1},(_,i)=>journeyChapter+1+i).some(chapterAccessible);
 $('chapterTrail').innerHTML='<span class="eyebrow">DEIN WEG</span><div class="chapter-milestones">'+Array.from({length:CHAPTERS.length},(_,ch)=>ch).filter(ch=>ch<=activeChapter+1||chapterAccessible(ch)).map(ch=>{const count=chapterItems(ch).filter(n=>done.has(n)).length,open=chapterAccessible(ch);return '<button data-chapter="'+ch+'" '+(open?'':'disabled')+' '+(ch===journeyChapter?'aria-current="step"':'')+'><b>'+(count===10?'✓':open?String(ch+1).padStart(2,'0'):'◇')+'</b><span>Kapitel '+(ch+1)+'</span></button>';}).join('')+'</div>';
 $('journeyChapters').innerHTML='<section class="journey-chapter"><span class="eyebrow">KAPITEL '+(journeyChapter+1)+' · '+solved+' VON '+(end-start)+'</span><h3>'+C.stages.find(s=>s.id===C.byIndex[chapterItems(journeyChapter)[0]].stage).name+' · '+CHAPTERS[journeyChapter].toLocaleLowerCase('de-DE')+'</h3>'+pathMarkup(chapterItems(journeyChapter))+'</section>';

}
function showJourney(){
 leaveLesson();closeDialogs();const next=frontier();journeyChapter=chapterOf(next??ORDER[TOTAL-1]);
 $('journeyProgress').textContent=done.size+' Formen gesammelt';$('journeyStats').textContent='Ein Rätsel nach dem anderen. In deinem Tempo.';
 $('journeyGuidance').textContent=next===undefined?'Alle Kapitel entdeckt. Deine Formen bleiben zum Wiederholen hier.':'Löse die nächste Form. Nach zehn Rätseln öffnet sich ein neues Kapitel.';
 $('journeyContinue').textContent=next===undefined?'Deine Sammlung ansehen →':tutorialProgress<6?'Erste Schritte fortsetzen →':'Rätsel '+numberOf(next)+' weiterspielen →';$('journeyContinue').onclick=()=>{if(next===undefined)showGallery();else continuePuzzle(next);};
 $('courseProgress').textContent=tutorialProgress===6?'Erste Schritte · Wiederholen →':'Erste Schritte · '+tutorialProgress+' von 6 geschafft →';
 $('journeyGuidance').textContent=tutorialProgress<6?'Sechs kleine Übungen zeigen dir das Spiel. Danach beginnt deine Reise.':$('journeyGuidance').textContent;
 $('jumpNumber').max=TOTAL;$('jumpNumber').value=C.position[index]+1;renderJourneyChapter();$('journey').showModal();setTimeout(()=>{$('journeyChapters').querySelector?.('.current')?.scrollIntoView?.({block:'center'});},0);
}
$('chapterTrail').onclick=e=>{const b=e.target.closest('[data-chapter]');if(b&&chapterAccessible(+b.dataset.chapter)){journeyChapter=+b.dataset.chapter;renderJourneyChapter();}};
$('journeyPrevious').onclick=()=>{for(let ch=journeyChapter-1;ch>=0;ch--)if(chapterAccessible(ch)){journeyChapter=ch;renderJourneyChapter();break;}};
$('journeyNext').onclick=()=>{for(let ch=journeyChapter+1;ch<CHAPTERS.length;ch++)if(chapterAccessible(ch)){journeyChapter=ch;renderJourneyChapter();break;}};
// Direct jumps are deliberately confined to development tools.
$('jumpLevel').onclick=()=>{const n=Number($('jumpNumber').value);if(!Number.isInteger(n)||n<1||n>TOTAL){toast('Bitte eine Rätselnummer von 1 bis '+TOTAL+' eingeben.');return;}closeDialogs();load(ORDER[n-1]);};
document.querySelector('.brand').onclick=e=>{e.preventDefault();showHome();};
 $('openJourney').onclick=showJourney;$('closeJourney').onclick=()=>$('journey').close();
 $('journeyChapters').onclick=e=>{const button=e.target.closest('[data-journey]');if(button&&accessible(+button.dataset.journey)){closeDialogs();load(+button.dataset.journey);}};

function recordLabel(n){const mode=records[n]?.mode;return mode==='own'?'✦ Ohne Hinweise':mode==='hint'?'✓ Mit Hinweis':mode==='test'?'⚙ Testansicht':'✓ Gesammelt';}
function showBackup(){closeDialogs();persist();$('backupCode').value=HexSave.encode(readSave(STORAGE));$('backupStatus').textContent='Die Sicherung enthält deine Sammlung, Einstellungen und angefangenen Rätsel.';$('restorePreview').hidden=true;$('confirmRestore').hidden=true;pendingRestore=null;$('backup').showModal();}
let pendingRestore=null;
function inspectBackup(text){try{pendingRestore=HexSave.decode(text);$('backupCode').value=text;$('restorePreview').textContent=pendingRestore.done.length+' gesammelte Lichtstücke · weiter bei Rätsel '+numberOf(pendingRestore.index)+'. Beim Übernehmen wird der aktuelle Spielstand ersetzt.';$('restorePreview').hidden=false;$('confirmRestore').hidden=false;$('backupStatus').textContent='Sicherung geprüft. Du kannst sie jetzt übernehmen.';}catch(error){pendingRestore=null;$('confirmRestore').hidden=true;$('restorePreview').hidden=true;$('backupStatus').textContent=error.message;}}
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

$('dragGap').oninput=e=>{dragGap=Math.max(24,Math.min(100,Number(e.target.value)||48));$('dragGapValue').textContent=dragGap+' px';persist();};

// Main destinations are peers. Opening one never stacks it over another.
function showHome(){
 leaveLesson();closeDialogs();persist();const next=frontier(),n=next??index,m=M.motifs[n%COUNT],chapter=chapterOf(n),start=chapter*10;
 const solved=chapterItems(chapter).filter(i=>done.has(i)).length;
 $('homeArt').innerHTML=motifSVG(m,false);const chapterPath=chapterItems(chapter),pathStart=Math.max(0,Math.min(5,chapterPath.indexOf(n)-1));$('homePath').innerHTML=pathMarkup(chapterPath.slice(pathStart,pathStart+5));$('homeHeading').textContent=CHAPTERS[chapter].toLocaleLowerCase('de-DE');$('homeContinue').textContent=next===undefined?'Deine Sammlung ansehen →':'Weiterspielen';
 $('homeResume').textContent=next===undefined?'Alle 300 Formen entdeckt. Schön gemacht!':'Rätsel '+numberOf(n)+' · '+m.name+(attempts[n]&&Object.keys(attempts[n].placements||{}).length?' · Angefangen':'');
 $('homeSolved').textContent=String(done.size);$('homePercent').textContent=String(chapter+1).padStart(2,'0');
 $('homeChapterLabel').textContent='KAPITEL '+String(chapter+1).padStart(2,'0');$('homeChapterTitle').textContent=C.stages.find(s=>s.id===C.byIndex[n].stage).name+' · '+CHAPTERS[chapter].toLocaleLowerCase('de-DE');$('homeChapterProgress').textContent=solved+' von 10 Formen gesammelt';$('homeChapterBar').style.width=solved*10+'%';
 if(tutorialProgress<6){$('homeContinue').textContent='Erste Schritte '+(tutorialProgress?'fortsetzen':'starten')+' →';$('homeResume').textContent='Lerne das Spiel kennen · '+tutorialProgress+' von 6 Übungen geschafft';$('homeArt').innerHTML=motifSVG(C.lesson(tutorialProgress).motif,false);}
 const playLabel=tutorialProgress<6?'Erste Schritte':next===undefined?'Sammlung ansehen':'Weiterspielen';$('homeContinue').innerHTML='<div class="home-live-preview" aria-hidden="true">'+$('homeArt').innerHTML+'</div><span class="home-play-label">'+playLabel+'</span>';
 $('homeContinue').onclick=()=>{if(tutorialProgress<6){loadLesson(tutorialProgress);return;}if(next===undefined)showGallery();else continuePuzzle(n);};
 $('homePath').onclick=e=>{const b=e.target.closest('[data-journey]');if(b&&accessible(+b.dataset.journey)){closeDialogs();load(+b.dataset.journey);}};
 $('homeChapter').onclick=()=>{showJourney();journeyChapter=chapter;renderJourneyChapter();};$('home').showModal();
}
function routeView(route){if(route==='home')showHome();else if(route==='journey')showJourney();else if(route==='gallery')showGallery();else if(route==='menu')showMenu();}
document.addEventListener('click',e=>{const button=e.target.closest?.('[data-route]');if(button)routeView(button.dataset.route);});
$('gameHome').onclick=showHome;$('gameJourney').onclick=showJourney;
$('openHelp').onclick=()=>{closeDialogs();$('help').showModal();};$('closeHelp').onclick=showMenu;

function backView(){
 for(const [id,parent] of [['resetDialog',null],['detail','gallery'],['backup','menu'],['help','menu'],['win',null],['intro','home'],['journey','home'],['gallery','home'],['menu','home']])if($(id).open){$(id).close();if(id==='intro'){introSeen=true;persist();}if(parent)routeView(parent);return true;}
 if($('home').open)return false;showHome();return true;
}
window.LumaBack=backView;
for(const id of ['home','journey','gallery','menu','detail','backup','help','resetDialog','win'])$(id).addEventListener('cancel',e=>{if(id==='home')return;e.preventDefault();backView();});
$('start').onclick=()=>{introSeen=true;persist();loadLesson(tutorialProgress<6?tutorialProgress:0);};
if(introSeen)showHome();

function leaveLesson(){if(tutorialIndex!==null){persist();tutorialIndex=null;load(index);}}
function loadLesson(n){
 closeDialogs();persist();clearTimeout(winTimer);tutorialIndex=n;data=C.lesson(n);placements=clone(C.lessons[n].seed||{});history=[];selected=null;hints=0;testUsed=false;drag=null;$('ghost').innerHTML='';$('board').classList.remove('completed');window.scrollTo?.({top:0,behavior:'instant'});render();
}
function completeLesson(playSound=true){
 if(E.occupied(data,placements).size!==data.cells.length)return;const lesson=tutorialIndex;tutorialProgress=Math.max(tutorialProgress,lesson+1);persist();if(playSound)tone(true);$('board').classList.add('completed');$('winArt').innerHTML=motifSVG(data.motif);$('winEyebrow').textContent='ERSTE SCHRITTE · '+(lesson+1)+' VON 6';$('winTitle').textContent=lesson===5?'Bereit für deine Reise!':'Das passt!';$('winQuote').textContent=lesson===5?'Du kennst die Grundlagen. Jetzt wartet deine erste Entdeckung.':'Gut gemacht. Weiter geht’s mit einem kleinen neuen Schritt.';$('winText').textContent='Übungsrätsel bleiben getrennt von deiner Sammlung.';$('winCollection').hidden=true;$('next').textContent=lesson===5?'Meine Reise starten →':'Nächste Übung →';clearTimeout(winTimer);winTimer=setTimeout(()=>{if(tutorialIndex===lesson&&E.occupied(data,placements).size===data.cells.length&&!document.querySelector('dialog[open]'))$('win').showModal();},500);
}
function advanceLesson(){const n=tutorialIndex;closeDialogs();if(n<5)loadLesson(n+1);else{tutorialIndex=null;load(frontier()??index);showHome();}}
$('openCourse').onclick=()=>loadLesson(tutorialProgress<6?tutorialProgress:0);$('helpCourse').onclick=()=>loadLesson(0);
$('skipLesson').onclick=()=>{persist();tutorialProgress=6;tutorialIndex=null;load(frontier()??index);showHome();};
