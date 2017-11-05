const fs = require('fs');
// exports.save = (data, name) => {
//     fs.writeFileSync('./' + name + '.json', JSON.stringify(data));
// }
exports.save = async (data, name) => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./' + name + '.json', JSON.stringify(data), (err, content) => {
            if (err) {
                reject(err);
            }
            resolve(content);
        });
    });
}

const readFile = async(name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./' + name + '.json', 'utf8', (err, content) => {
            if (err) {
                reject(err);
            }
            resolve(content);
        });
    });
}

exports.load = async (name) => {
    readFile(name)
    .then((content) => {
        console.log("\n"); 
        console.log(content);
    }).catch((err) => {
        console.error(err);
    });
}

exports.allRequests = [];
exports.allCarryBuddies = [];
exports.allReviews = [];

