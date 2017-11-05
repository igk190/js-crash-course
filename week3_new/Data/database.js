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
    const content = await readFile(name);
    return JSON.parse(content);
}

exports.allRequests = [];
exports.allCarryBuddies = [];
exports.allReviews = [];

// exports.load = (name) => {
//     return JSON.parse(fs.readFileSync('./' + name + '.json', 'utf8'));
// }

// PromiseFunction = (name) => {
//     return new Promise((resolve, reject) => {
//         fs.readFile('./' + name + '.json', 'utf8', (err, contents) => {
//             if(err) {
//                  reject(err);
//              } else {
//                 resolve(contents);
//              }

//         })  
        
//     })
//  } 

//  exports.load = PromiseFunction {  // nein
//  .then(function(result) {
//     return result;
// })



