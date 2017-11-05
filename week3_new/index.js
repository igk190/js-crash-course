const fs = require('fs');
const Seeder = require('./seeder')
const Database = require('./Data/database')

function main() {
    
    Seeder.seedDatabase();
    
    let carrybuddies = Database.load('carrybuddies')
    Database.load('requests')
    Database.load('reviews')
}

main()


