(function(root){'use strict';
const dictionary=typeof module!=='undefined'?require('./i18n-en.js'):root.HexEnglish;
for(const [key,value]of Object.entries({...dictionary})){if(!Object.hasOwn(dictionary,key.toUpperCase()))dictionary[key.toUpperCase()]=value.toUpperCase();if(!Object.hasOwn(dictionary,key.toLowerCase()))dictionary[key.toLowerCase()]=value.toLowerCase();}
const englishValues=new Set(Object.values(dictionary)),readingValues=new Set(Object.values(root.HexFinishEnglish||{}).flatMap(x=>[x.text,x.answer].filter(Boolean))); 
const KEY='lumahex-language-v1',valid=v=>['system','de','en'].includes(v);
function resolve(preference,system){return preference==='de'||preference==='en'?preference:/^de(?:[-_]|$)/i.test(system||'')?'de':'en';}
function read(){try{const value=root.localStorage.getItem(KEY);return valid(value)?value:'system';}catch{return 'system';}}
function system(){try{const native=root.LumaFeedback?.getSystemLanguage?.();if(native)return native;}catch{}return root.navigator?.languages?.[0]||root.navigator?.language||'en';}
let preference=read(),language=resolve(preference,system());
const escape=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
// Long phrases win over individual nouns. Letter boundaries also protect identifiers and URLs.
const keys=Object.keys(dictionary).filter(k=>k.length>=3).sort((a,b)=>b.length-a.length);
const pattern=new RegExp('(?<![\\p{L}])(?:'+keys.map(escape).join('|')+')(?![\\p{L}])','gu');
function t(value){if(typeof value!=='string'||language==='de'||!value)return value;const trimmed=value.trim();if(englishValues.has(trimmed)||readingValues.has(trimmed))return value;if(Object.hasOwn(dictionary,trimmed))return value.replace(trimmed,dictionary[trimmed]);
 const phrases=[[/^Bitte eine Rätselnummer von 1 bis (\d+) eingeben\.$/,'Please enter a puzzle number from 1 to $1.'],[/^Rätsel (\d+) spielen$/,'Play puzzle $1'],[/^Rätsel (\d+) weiterspielen(?: →)?$/,'Continue puzzle $1 →'],[/^(\d+) von (\d+) Feldern$/,'$1 of $2 cells']];for(const [pattern,replacement]of phrases)if(pattern.test(trimmed))return value.replace(trimmed,trimmed.replace(pattern,replacement));
 return value.replace(/\b(\d+) von (\d+)\b/g,'$1 of $2').replace(/\bVON (\d+)\b/g,'OF $1').replace(pattern,key=>dictionary[key]).replace(/\b(\d+) Puzzle\b/g,(_,n)=>n+' '+(Number(n)===1?'puzzle':'puzzles')).replace(/\b(\d+) (?:Hint|Hints|hint|hints)\b/g,(_,n)=>n+' '+(Number(n)===1?'hint':'hints')).replace(/\b1 different puzzles\b/g,'1 different puzzle').replace(/\b1 complete chapters\b/g,'1 complete chapter').replace(/\b1 journey stages\b/g,'1 journey stage').replace(/\b1 pieces\b/g,'1 piece').replace(/\b1 cells\b/g,'1 cell').replace(/\b1 days in a row\b/g,'1 day in a row');}
function html(value){if(language==='de'||typeof value!=='string')return value;return value.replace(/(<[^>]+>)|([^<]+)/g,(part,tag,text)=>tag?tag.replace(/((?:aria-label|title|placeholder)=["'])(.*?)(["'])/g,(_,a,b,c)=>a+t(b)+c):t(text));}
function translateStatic(element){if(!element)return;for(const node of [...element.childNodes]){if(node.nodeType===3)node.nodeValue=t(node.nodeValue);else if(node.nodeType===1&&!['SCRIPT','STYLE'].includes(node.tagName)){for(const name of ['aria-label','title','placeholder'])if(node.hasAttribute(name))node.setAttribute(name,t(node.getAttribute(name)));translateStatic(node);}}}
function apply(){if(!root.document)return;root.document.documentElement.lang=language;translateStatic(root.document.documentElement);const undo=root.document.getElementById?.('undo');if(language==='en'&&undo?.lastChild?.nodeType===3)undo.lastChild.nodeValue='Undo';try{root.LumaFeedback?.setLanguage?.(language);}catch{}}
function setPreference(value){if(!valid(value))return false;preference=value;language=resolve(value,system());try{root.localStorage.setItem(KEY,value);}catch{}return true;}
function checkSystem(){if(preference!=='system'||resolve('system',system())===language)return false;root.LumaPauseClock?.();root.location?.reload();return true;}
const api={t,html,resolve,valid,apply,setPreference,checkSystem,get preference(){return preference;},get language(){return language;},get locale(){return language==='de'?'de-DE':'en-GB';}};
if(typeof module!=='undefined')module.exports=api;else{root.HexI18n=api;apply();root.addEventListener?.('languagechange',checkSystem);}
})(typeof window!=='undefined'?window:globalThis);
