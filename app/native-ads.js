// Included only in the internal AdMob demo variant.
(function(){'use strict';
 let session=null,sequence=0;
 function available(){try{return !!window.LumaFeedback?.isAdMobDemo();}catch{return false;}}
 function refresh(){
  const empty=!unlimitedHints&&hintWallet.count===0;
  $('freeHint').hidden=!empty;
  $('freeHint').disabled=!!session;
  $('freeHint').textContent=L.t(session?'Anzeige wird geladen …':'Video ansehen · +1 Hinweis');
  if(empty){$('hintDialogTitle').textContent=L.t('Keine Hinweise mehr?');$('hintDialogStatus').textContent=L.t(session?'Anzeige wird geladen …':'Sieh dir ein Video an und erhalte einen Hinweis.');}
 }
 function start(kind){
  if(session)return false;
  if(!available()){if(kind==='rewarded')toast('Werbevideo gerade nicht verfügbar. Bitte später erneut versuchen.');return false;}
  session={id:'demo_'+Date.now()+'_'+(++sequence),kind,rewarded:false,shown:false};syncClock();refresh();
  try{window.LumaFeedback.requestAd(kind,session.id);}catch{window.HexNativeAdEvent({id:session.id,event:'failed'});}
  return true;
 }
 window.HexNativeAds={busy:()=>!!session,refresh,cancel:()=>{
  if(!session)return false;
  if(session.shown)return true;
  const id=session.id;try{window.LumaFeedback.cancelAd(id);}catch{}
  window.HexNativeAdEvent({id,event:'cancelled'});return true;
 }};
 window.HexNativeAdEvent=message=>{
  if(!session||!message||message.id!==session.id)return;
  const current=session;
  if(message.event==='shown'){
   if(current.shown)return;current.shown=true;
   if(current.kind==='rewarded'&&$('hintDialog').open)closeDialog('hintDialog');
   syncAds();HexAds.shown(adState);persist();return;
  }
  if(message.event==='reward'){
   if(current.kind!=='rewarded'||current.rewarded||!current.shown)return;
   current.rewarded=true;
   HexHints.reward(hintWallet,current.id);persist();refreshHints();return;
  }
  if(!['closed','failed','cancelled'].includes(message.event))return;
  session=null;refreshHints();syncClock();
  if(current.kind==='interstitial'){
   const next=pendingAdContinuation;pendingAdContinuation=null;if(next)next();return;
  }
  if(current.rewarded){if($('hintDialog').open)closeDialog('hintDialog');toast('+1 Hinweis');}
  else if(message.event==='failed'){
   if(!$('hintDialog').open)openDialog('hintDialog');
   toast('Werbevideo gerade nicht verfügbar. Bitte später erneut versuchen.');
  }else if(message.event==='cancelled'){
   if($('hintDialog').open)closeDialog('hintDialog');
  }
 };
 refreshFreeHint=refresh;
 $('freeHint').onclick=()=>{if($('hintDialog').open&&hintWallet.count===0&&!unlimitedHints)start('rewarded');};
 $('cancelHint').onclick=()=>{window.HexNativeAds.cancel();if($('hintDialog').open)closeDialog('hintDialog');};
 requestNext=()=>{
  if(pendingAdContinuation||session)return;
  if(tutorialIndex!==null){continuePuzzle(index+1);return;}
  if(E.occupied(data,placements).size!==data.cells.length)return;
  const next=nextUnsolved(0),boundary=next===undefined||chapterOf(next)!==chapterOf(index)||chapterItems(chapterOf(index)).every(n=>done.has(n));
  syncAds();
  if(!testUsed&&HexAds.eligible(adState,{normal:true,chapter:chapterOf(index),chapterBoundary:boundary})&&available()){
   pendingAdContinuation=()=>continuePuzzle(index+1);
   if(start('interstitial'))return;
   pendingAdContinuation=null;
  }
  continuePuzzle(index+1);
 };
 refreshHints();
})();
