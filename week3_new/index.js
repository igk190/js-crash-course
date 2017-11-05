const fs = require('fs');
const Seeder = require('./seeder')
const Database = require('./Data/database')

function main() {
    
    Seeder.seedDatabase();
    
    let loadedBuddies = Database.load('carrybuddies')
    let loadedReviews = Database.load('reviews')
    let loadedRequests = Database.load('requests')
    
    console.log("READING LOADED FILE: ")
    console.log(loadedReviews)
    console.log(JSON.stringify(loadedRequests))
    console.log(JSON.stringify(loadedBuddies))
    console.log(JSON.stringify(loadedBuddies))
}

main()


