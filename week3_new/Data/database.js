const fs = require('fs');

exports.save = (data, name) => {
    fs.writeFileSync('./' + name + '.json', JSON.stringify(data));
}

// exports.load = (name) => {
//     return JSON.parse(fs.readFileSync('./' + name + '.json', 'utf8'));
// }

PromiseFunction = (name) => {
    return new Promise((resolve, reject) => {
        fs.readFile('./' + name + '.json', 'utf8', (err, contents) => {
            if(err) {
                 reject(err);
             } else {
                resolve(contents);
             }

        })  
        
    })
 } 

 exports.load = PromiseFunction {  // nein
 .then(function(result) {
    return result;
})

exports.allRequests = [];
exports.allCarryBuddies = [];
exports.allReviews = [];

