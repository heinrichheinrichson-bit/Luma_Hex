const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'../app');
let html=fs.readFileSync(path.join(root,'index.html'),'utf8');
html=html.replace('<link rel="stylesheet" href="style.css">','<style>'+fs.readFileSync(path.join(root,'style.css'),'utf8')+'</style>');
html=html.replace('<script src="motifs.js"></script><script src="engine.js"></script><script src="curriculum.js"></script><script src="finish.js"></script><script src="save.js"></script><script src="achievements.js"></script><script src="game.js"></script>','<script>'+fs.readFileSync(path.join(root,'motifs.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'engine.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'curriculum.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'finish.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'save.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'achievements.js'),'utf8')+'</script><script>'+fs.readFileSync(path.join(root,'game.js'),'utf8').replace("if('serviceWorker' in navigator&&location.protocol!=='file:')navigator.serviceWorker.register('./sw.js').catch(()=>{});",'')+'</script>');
html=html.replace('<link rel="icon" href="icon.svg"><link rel="manifest" href="manifest.webmanifest">','');
fs.writeFileSync(path.resolve(root,'../releases/Luma-Hex-Browser.html'),html);
