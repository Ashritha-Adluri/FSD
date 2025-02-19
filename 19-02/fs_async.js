const fs = require('fs');
const filePath = 'file.txt';
fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {        
        console.error('Error reading the file:', err.message);
    } else {
        console.log('File content:\n', data);
    }
});


