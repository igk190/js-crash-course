const fs = require('fs');
const Seeder = require('./seeder')
const Database = require('./database')

function main() {
    let findBuddies = Seeder.seedDatabase();
    console.log(JSON.stringify(findBuddies))
    
    Database.save(findBuddies)
    let loadedBuddies = Database.load()
    console.log("READING LOADED FILE: ")
    console.log(JSON.stringify(loadedBuddies))
}

main()


