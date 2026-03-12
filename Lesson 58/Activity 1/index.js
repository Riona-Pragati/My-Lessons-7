var fs = require('fs');

//create a file named mynewfile.txt:
fs.writeFile('mytextfile.txt', 'I changed the content',
function (err) {
    if (err) throw err;
    console.log('Content changed!');
});
