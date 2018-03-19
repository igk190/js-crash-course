const Lunch = require('./lunch');
const Database = require('./database');

let users = Database.users;
let lunches = Database.lunches;

module.exports = class User {
	constructor(name, location, email, userID){
		this.name = name;
		this.location = location;
		this.email = email;
		this.userID = userID;
	}

	publishLunch(lunch) {
		lunch.hostID = this.userID;
	}

	joinLunch(lunch) { 
		let user = this;
		lunches.forEach(function(thelunch) {
			if (thelunch.lunchID === lunch.lunchID) {
				thelunch.guestID = user.userID;
				thelunch.status = "pending";
			}
		})
	}

	viewAllLunches() {
		console.log("Here are all lunches in the world: \n");
		console.log(JSON.stringify(lunches));
	}
	
	viewLunchesByLocation(location){
		let lunchesByLocation = lunches.filter(function(loc) {
			return loc.location === location && (loc.status === "open" || loc.status === "pending");
		}); 
		if (lunchesByLocation.length === 0) {
			console.log(`Sorry, no one here in ${location}.\n`);
		} else {
			console.log(`Here's all lunches in: ${location}`, lunchesByLocation, "\n");
		}
	}

	findLunchByID(id){
		let lunchByID = lunches.filter((lunch) => {
			return lunch.lunchID === id;
		});
		console.log("Here's your lunch by with ID", id, lunchByID, "\n");
	}

	sayName() {
		console.log(this.name);
	}

	static create(obj) {
		return new User(obj.name, 
						obj.location, 
						obj.email, 
						obj.userID)
	}

}


