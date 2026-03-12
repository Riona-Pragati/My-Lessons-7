var fs = require('fs');

//rename a file named mynewfile1.txt:
"myrenamedfile.txt"
fs.rename('file.txt', 'myrenamedfile.txt', 
function (err) {
    if (err) throw err;
    console.log('File Renamed');
});