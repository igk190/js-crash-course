const Database = require('./Data/database')
const CarryBuddy = require('./Models/carrybuddy')
const Request = require('./Models/request')
const Review = require('./Models/review')

exports.seedDatabase = () => {
    
    let allCarryBuddies = Database.allCarryBuddies;
    let allRequests = Database.allRequests;
    let allReviews = Database.allReviews;

    getCarryBuddyReviews = carrybuddyID => allReviews.find(function(o){return o.carrybuddyID === carrybuddyID;});    
    getCarryBuddyRequests = carrybuddyID => allRequests.find(function(o){return o.carrybuddyID === carrybuddyID;});
    
    carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com", 1);
    carrybuddy2 = new CarryBuddy("Piet", "Berlin", "p@iet.com", 2);
    carrybuddy3 = new CarryBuddy("Henk", "Stuttgart","h@enk.com", 3);
    carrybuddy4 = new CarryBuddy("Truus", "Stuttgart", "t@ruus.com", 4)

    allCarryBuddies.push(carrybuddy1);
    allCarryBuddies.push(carrybuddy2);
    allCarryBuddies.push(carrybuddy3);
    allCarryBuddies.push(carrybuddy4);

    Database.save(allCarryBuddies, 'carrybuddies')

    console.log("LOGGING NEARBY BUDDIES") // next thing no working
    carrybuddy1.viewNearbyBuddies('Berlin') 

    var bed = new Request("bed", "Berlin", "12/11/2017", "14:00", 1, 1, )
    var couch = new Request("couch", "Berlin", "11/11/2017", "10:00", 2, 1)
    var table = new Request("table", "Stuttgart", "09/11/2017", "09:00", 3, 3)
    var fridge = new Request("fridge", "Stuttgart", "09/11/2017", "15:00", 4, 3)
    
    allRequests.push(bed)
    allRequests.push(couch)
    allRequests.push(table)
    allRequests.push(fridge)

    Database.save(allRequests, 'requests')

    carrybuddy1.viewNearbyRequests('Berlin')
    carrybuddy2.viewNearbyRequests('Stuttgart')
    
    review1 = new Review(1, 2, 5, "Perfect help! Thanks bro")
    review2 = new Review(2, 2, 5, "ermargurd wow")
    review3 = new Review(3, 1, 5, "Yay!")
    review4 = new Review(4, 3, 5, "Lol.")

    allReviews.push(review1)
    allReviews.push(review2)
    allReviews.push(review3)
    allReviews.push(review4)

    Database.save(allReviews, 'reviews')

}
