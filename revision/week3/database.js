const fs = require('fs');
const red = require('ansi-red');

exports.save = (input, db, cb) => {
    let file = `./data/${db}.json`;

    setTimeout(() => {
    fs.writeFile(file, JSON.stringify(input, null, 2),
cb);
}, 500);
}

exports.loadFile = (filename) => {
    return new Promise((resolve, reject) => {
        fs.readFile(`./data/${filename}.json`, 'utf8', (err, contents) => {
            if (err) return reject(err);
            resolve(contents);
        });
    });
}

exports.users = [];
exports.lunches = [];



