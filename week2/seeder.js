const Database = require('./database')
exports.seedDatabase = () => {
    let carrybuddies = Database.carrybuddies;

    carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com");
    carrybuddy2 = new CarryBuddy("Piet", "Berlin", "p@iet.com");
    carrybuddy3 = new CarryBuddy("Henk", "Stuttgart","h@enk.com");
    carrybuddy4 = new CarryBuddy("Truus", "Stuttgart", "t@ruus.com")
    
    carrybuddies.push(carrybuddy1);
    carrybuddies.push(carrybuddy2);
    carrybuddies.push(carrybuddy3);
    carrybuddies.push(carrybuddy4);
    

}



