const fs = require('fs');

exports.save = (buddies) => {
    fs.writeFileSync('./myjsonfile.json', JSON.stringify(buddies));
}

exports.load = () => {
    return JSON.parse(fs.readFileSync('./myjsonfile.json', 'utf8'));
}

exports.allRequests = [];
exports.carrybuddies = [];

