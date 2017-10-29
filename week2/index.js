//const Person = require('./person')
//const Database = require('./database')

//const armagan = new Person('Armagan', 33)
// const mihri = new Person('Mihri', 29)
// const instructors = [armagan, mihri]

// Database.save(instructors)
//const loadedFile = Database.load();
//console.log(loadedFile[0]);

////////////////////// EXAMPLES ABOVE

const CarryBuddy = require('./carrybuddy')
const Request = require('./request')
const Review = require('./review')
const Database = require('./database')

let allRequests = Database.allRequests;
let carrybuddies = Database.carrybuddies;
//console.log(allRequests, carrybuddies, "bababa")

getCarryBuddyByName = name => carrybuddies.find(function(o){return o.name === name;});

// x = getCarryBuddyByName("Baads")
// console.log(carrybuddies, "carrybdddsdsdsdsds")
// carrybuddies.push('Henk')
// cb1 = getCarryBuddyByName('Henk')
// console.log(carrybuddies)

////// BELOW TO BE ADJUSTED ////// /// PLACE WHERE?

carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com");
carrybuddy2 = new CarryBuddy("Piet", "Berlin", "p@iet.com");
carrybuddy3 = new CarryBuddy("Henk", "Stuttgart","h@enk.com");
carrybuddy4 = new CarryBuddy("Truus", "Stuttgart", "t@ruus.com")

carrybuddies.push(carrybuddy1);
carrybuddies.push(carrybuddy2);
carrybuddies.push(carrybuddy3);
carrybuddies.push(carrybuddy4);

console.log("++++++++++++++++++++++++++++++++++++++++++")
carrybuddy1.viewNearbyBuddies("Berlin")
carrybuddy1.viewNearbyBuddies("Bxxxxn")
carrybuddy2.viewNearbyBuddies("Stuttgart")

var bed = new Request("bed", "Berlin", "12/11/2017", "14:00")
var couch = new Request("couch", "Berlin", "11/11/2017", "10:00")
var table = new Request("table", "Stuttgart", "09/11/2017", "09:00")
var fridge = new Request("fridge", "Stuttgart", "09/11/2017", "15:00")

carrybuddy1.publishRequest(bed)
carrybuddy1.publishRequest(couch)
//console.log("ALL REQUESTS IN CARRYBUDDY1 " + JSON.stringify(carrybuddy1.requests))
carrybuddy3.publishRequest(table)
carrybuddy3.publishRequest(fridge)

carrybuddy2.viewNearbyRequests("Berlin")
carrybuddy2.viewNearbyRequests("Bxxxxn")
carrybuddy4.viewNearbyRequests("Stuttgart")


carrybuddy2.offerHelp(carrybuddy1, bed)
console.log("carrybuddy1 requests & upcoming events:\n" + "reqs" + JSON.stringify(carrybuddy1.requests) + "\n//upcoming" + JSON.stringify(carrybuddy1.upcomingEvents))
console.log("carrybuddy2 upcoming events:"  + "//" + JSON.stringify(carrybuddy2.upcomingEvents))


carrybuddy1 = getCarryBuddyByName("Gracia")
carrybuddy2 = getCarryBuddyByName("Piet")

carrybuddy1.writeReview(bed, carrybuddy2, 5, "Perfect help! Thanks bro")
carrybuddy2.writeReview(bed, carrybuddy1, 5, "Cool and friendly dude. Glad I could help out!")

console.log(JSON.stringify(carrybuddy1.average_rating))
console.log(carrybuddy1.ratings) // rating by Piet
console.log(carrybuddy2.ratings) // rating by Gracia