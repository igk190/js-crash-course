const fs = require('fs');
const Seeder = require('./seeder')
const Database = require('./Data/database')

function main() {
    
    Seeder.seedDatabase();
    
    let carrybuddies = Database.load('carrybuddies')
    let requests =  Database.load('requests')
    let reviews = Database.load('reviews')
    
}

main()


