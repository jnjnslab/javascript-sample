const fs = require('fs');

fs.readFile('./txt/input.txt', 'utf-8',(err,data) => {
    if (err) {
        console.log(err);
    } else {
        //console.log(data);
        const textOut = `This is what we know about the avocado: ${data}.\nCreated on ${Date.now()}`;
        fs.writeFile('./txt/output2.txt', textOut, 'utf-8', (err) => {
            if (err) {
                console.log(err);
            } else {
                console.log('write ok');
            }
        });
    }
});
