'use strict';
const fs=require('fs'),path=require('path');
function closed(html,game){
 const once=(s,from,to)=>{if(!s.includes(from))throw Error('Variant source changed: '+from);return s.replace(from,to);};
 html=once(html,html.match(/<section class="settings-section"><h3>Entwicklung & Tests<\/h3>[\s\S]*?<\/section>/)?.[0]||'MISSING DEV SECTION','');
 html=html.replace(/<dialog id="adTestDialog"[\s\S]*?<\/dialog>/,'').replace(/<button id="hintVideo"[\s\S]*?<\/button>/,'');
 const lines=game.split(/\r?\n/);game=lines.filter(line=>![/^function testAction\(/,/^function setSkinTest\(/,/^function hintTestPreferences\(/,/^function adPreferences\(/,/^function updateAdStatus\(/,/^function dismissTestAd\(/,/^\$\('test/,/^\$\('jumpLevel'/,/^\$\('adTestToggle'/,/^\$\('hintVideo'/,/^ if\(\$\('adTestDialog'/].some(re=>re.test(line))).map(line=>{
 if(line.startsWith('let unlimitedHints='))return 'const unlimitedHints=false;';
 if(line.startsWith('let skinTest='))return 'const skinTest=false;';
 if(line.startsWith('let adTestEnabled='))return '';
 if(line.startsWith('function requestNext('))return "function requestNext(){if(tutorialIndex!==null){continuePuzzle(index+1);return;}if(E.occupied(data,placements).size!==data.cells.length)return;continuePuzzle(index+1);}";
 if(line.trimStart().startsWith("$('testUnlimitedHints').checked="))return " $('hintDialogTitle').textContent=L.t(hintWallet.count?'Ein Teil einsetzen?':'Deine Hinweise laden auf');$('hintDialogStatus').textContent=L.t(hintWallet.count?hintWallet.count+' Hinweise verfügbar. Ein Hinweis setzt ein Teil an seinen richtigen Platz.':'Du kannst weiterknobeln oder später einen kostenlosen Hinweis nutzen.');$('hintDialogRefill').textContent=L.t(hintWallet.count<3?'Nächster kostenloser Hinweis in '+HexHints.wait(HexHints.remaining(hintWallet))+'.':'Der kostenlose Vorrat ist voll.');$('confirmHint').hidden=!hintWallet.count;if(changed)persist();}";
 return line;
 }).join('\n');
 game=once(game,"updateAdStatus();$('testAllSkins').checked=skinTest;",'');
 game=once(game,"$('jumpNumber').max=TOTAL;$('jumpNumber').value=POSITION[index]+1;",'');
 game=game.replace("'hintDialog','adTestDialog','stoneSets'","'hintDialog','stoneSets'");
 game=once(game,"if(tutorialIndex===null&&unlimitedHints){testUsed=true;puzzleTimer.assist();}",'');
 for(const forbidden of ['testAction','setSkinTest','hintTestPreferences','adTestDialog','hintAdTest','adFreeSimulated','lumahex-hint-test','lumahex-skin-preview','lumahex-ad-test',"$('test", "$('jumpNumber", "$('hintVideo"]){if(game.includes(forbidden))throw Error('Developer reference remains: '+forbidden);}
 return {html,game};
}
module.exports={closed};
if(require.main===module){const [source,dest,variant]=process.argv.slice(2);if(!source||!dest||!['developer','closed'].includes(variant))throw Error('source dest developer|closed required');fs.mkdirSync(dest,{recursive:true});let html=fs.readFileSync(path.join(source,'index.html'),'utf8'),game=fs.readFileSync(path.join(source,'game.js'),'utf8');if(variant==='closed')({html,game}=closed(html,game));else html=html.replace('HEX &amp; JOY · Version','HEX &amp; JOY TEST · Version');fs.writeFileSync(path.join(dest,'index.html'),html);fs.writeFileSync(path.join(dest,'game.js'),game);}
