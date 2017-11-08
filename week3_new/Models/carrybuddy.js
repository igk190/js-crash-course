const Database = require('../Data/database')
let allCarryBuddies = Database.allCarryBuddies;
let allRequests = Database.allRequests;
const Review = require('../Models/review')
const Request = require('../Models/Request')

module.exports = class CarryBuddy{
	constructor(name, location, email, id, ratings){
		this.name = name;
		this.location = location;
		this.email = email;
		this.id = id;		
		this.ratings = [];
		this.average_rating = 0;
		this.sum = 0;
		this.num = 0;
	}

	static create(obj) {
		return new CarryBuddy(
			obj.name,
			obj.location,
			obj.email,
			obj.requests,
			obj.upcomingEvents,
			obj.ratings,
			obj.average_rating,
			obj.sum,
			obj.num
		)
	}

	viewNearbyRequests(location){
		let openRequestsByLocation = allRequests.filter(function(loc) {
				return loc.location === location
			});

		if (openRequestsByLocation.length === 0) {
			console.log("No open requests in " + location + " right now.")
		}
		else {
			console.log("Here are the open requests in " + location + ":");

			const x = openRequestsByLocation;
			for (var i = 0, len = x.length; i < len; i++) {
			    console.log("REQUEST "+ (i + 1) + ",\n\titem: " + x[i]["itemName"] + ",\n\tlocation: " +
			     x[i]["location"] + ",\n\tdate: " + x[i]["date"] + ",\n\ttime: " + x[i]["time"] + ",\n\tID: " + x[i]["id"])
			    } 
		}
	}

	viewNearbyBuddies(location){		
		const nearbyBuddies = allCarryBuddies.filter(function(o) {
			return o.location === location				
		});

		if (nearbyBuddies.length === 0) {
			console.log("Sorry, no buddies to be found in " + location + ".");
		}
		else {
			console.log("Here are all carry buddies in " + location + ":");

			const y = nearbyBuddies;
			for (var i = 0, len = y.length; i < len; i++) {
			    console.log("BUDDY "+ (i + 1) + ", name: " + y[i]["name"] + ", location: " +
			     y[i]["location"] + ", email: " + y[i]["email"] + ", average_rating: " + y[i]["average_rating"])
			    }
		} 
	}

	offerHelp(requestID) {

		var returnedRequest = allRequests.find(function(obj) {
			return obj.id === requestID;
		});
		
		if (returnedRequest.status === 'open') {
			returnedRequest.status = "pending"; 
			returnedRequest.carrybuddyhelperID = this.id;
			console.log(JSON.stringify(returnedRequest))
		} else {
			console.log("Another hero buddy is already helping! No help needed here. But thank you!")
		}
		// this.sendConfirmation(requestID); //?
	}

	// EXTRA:sendConfirmation(requestID){ 
	// 	 use requestID to get carrybuddyowner and helper id's. Find both in
	// 	// allcarrybuddies. save to new array. foreach in array, send message:
	// 	//console.log("Dear " + this.name + ',\n you have an event coming up.');
	// 	//console.log("item to be transported: " + request.itemName + " on " + request.date + " at " + request.time); 
	// }

	writeReview(buddyByID, rating, comment){ 
		var newID = Math.random() * 20; // ?

		const BuddyToReceiveReview = allCarryBuddies.find(function(obj) {
			return obj.id === buddyByID;
		});
		console.log("BUDDY TO RECEIVE REVIEW :", BuddyToReceiveReview); // y u undefined
		BuddyToReceiveReview.receiveReview(new Review(newID, BuddyToReceiveReview.id, rating, comment)) // y u no work
	}

	receiveReview(rating){ 
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;  
		this.num = this.num + 1;
		this.average_rating = this.sum/this.num;
	}

	deactivateRequest(itemName) {
		itemName.status = 'closed';
	}
}

