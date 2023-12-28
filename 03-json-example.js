const fs = require('fs');

fs.readFile('03-json-example.json', (err, data) => {
    if(err) throw err;

    const superHeros = JSON.parse(data);

    console.log(superHeros['homeTown']);
    console.log(superHeros['active']);
    console.log(superHeros['members'][1]['powers'][2]);
})