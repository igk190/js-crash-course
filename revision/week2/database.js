const fs = require('fs');
const red = require('ansi-red');

exports.saveUsers = (users) => {
    fs.writeFileSync('./users.json', JSON.stringify(users));
    console.log(red("saved users: "), users);
}

exports.loadUsers = () => {
    return JSON.parse(fs.readFileSync('./users.json', 'utf8'));
}

exports.saveLunches = (lunches) => {
    fs.writeFileSync('./lunches.json', JSON.stringify(lunches));
    console.log(red("saved lunches: "), lunches);
}

exports.loadLunches = () => {
    return JSON.parse(fs.readFileSync('./lunches.json', 'utf8'));
}

exports.users = [];
exports.lunches = [];