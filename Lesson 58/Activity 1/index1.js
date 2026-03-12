var fs = require('fs');

//delete a file named mynewfile2.txt:
fs.unlink('newfile.txt', function (err) {
    if (err) throw err;
    console.log('File Deleted');
});