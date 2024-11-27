var AdmZip = require('adm-zip');

// creating archives
var zip = new AdmZip();

zip.addLocalFolder("./META-INF/", "/META-INF/");
zip.addLocalFolder("./dist/servoy/swipelistener/", "/dist/servoy/swipelistener/");
zip.addLocalFolder("./swipelistener/", "/swipelistener/");
zip.writeZip("swipelistener.zip");