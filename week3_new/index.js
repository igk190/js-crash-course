const fs = require('fs');
const Seeder = require('./seeder')
const Database = require('./Data/database')

function main() {
    
    Seeder.seedDatabase();
    
    let loadedBuddies = Database.load('carrybuddies')
    let loadedRequests = Database.load('requests')
    let loadedReviews = Database.load('reviews')
    
    console.log("READING LOADED FILE: ")
    console.log(loadedReviews)
    console.log(JSON.stringify(loadedBuddies))
    console.log(JSON.stringify(loadedRequests))
    console.log(JSON.stringify(loadedReviews))
}

main()


