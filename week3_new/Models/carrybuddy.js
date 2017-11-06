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

	 

	offerHelp(requestid) {
		//carrybuddy1.offerHelp(1)
		console.log("yeauleau")

		var request = allRequests.find((requestid) => {
				return this.allRequests
		})
		request.status = "pending"; 
		request.helper = this.id; 
		return true;
		
		// set request.status to 'pending'
		// in request bed , set carrybuddyhelper.id  of to this.id

		//return carrybuddyownerID of request
			// 		buddy.receiveHelp(request); --> use found id?
		// in allcarrybuddies, find carrybuddy with id X. 

		//this.receiveConfirmation(request);
	}

	receiveHelp(requestid) {
		this.receiveConfirmation(request); //?
	}

	sendConfirmation(request){ //
		console.log("Dear " + this.name + ',\n you have an event coming up.');
		console.log("item to be transported: " + request.itemName + " on " + request.date + " at " + request.time); 
	}

	writeReview(request, buddy, rating, comment){ 
		buddy.receiveReview(new Review(this.name, rating, comment))
		//change status of re
	}

	receiveReview(rating){ 
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;  
		this.num = this.num + 1;
		this.average_rating = this.sum/this.num;
	}
}

