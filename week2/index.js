// Database.save(instructors)
const fs = require('fs');
const Seeder = require('./seeder')

function main() {
    let findBuddies = Seeder.seedDatabase();
    console.log(JSON.stringify(findBuddies))
    fs.writeFile('myjsonfile.json', JSON.stringify(findBuddies), 'utf8', (err, result) => {
        console.log('Written to file.')
    })
}
main()