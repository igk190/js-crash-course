const Database = require('../Data/database')
let allCarryBuddies = Database.allCarryBuddies;
let allRequests = Database.allRequests;
const Review = require('../Models/review')

module.exports = class CarryBuddy{
	constructor(name, location, email, id, ratings){
		this.name = name;
		this.location = location;
		this.email = email;
		this.id = id;		
		// this.upcomingEvents = [];
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

	offerHelp(request) {
		//this.carrybuddy finds 'bed' or whtvr and helps carrybud2 with request
		// for request eg. 'bed', look in allRequests
		//return carrybuddyownerID of request
			// 		buddy.receiveHelp(request); --> use found id?
		// in allcarrybuddies, find carrybuddy with id X. 
		// in request bed , set carrybuddyhelper.id  of to this.id

		this.receiveConfirmation(request);
	}

	receiveHelp(requestid) {
		this.upcomingEvents.push(request)
// --> CHANGE StATUS to pending here? or @ 
		// const removedFromRequests = this.requests.filter(function(req) {
		//     return req !== request; 
		// });
		// this.requests = removedFromRequests;
		//console.log("THIS REQUESTS :: ", JSON.stringify(this.requests));

		const removedFromAllRequests = allRequests.filter(function(reqs) {
		    return reqs !== request;
		})
		allRequests = removedFromAllRequests;
		//console.log("ALL OPEN REQUESTS::", JSON.stringify(allRequests));
		
		this.receiveConfirmation(request);
	}

	receiveConfirmation(request){ //
		console.log("Dear " + this.name + ',');
		console.log("You have an event coming up. Please check your upcoming events.");
		console.log("item to be transported: " + request.itemName + " on " + request.date + " at " + request.time); 
	}

	writeReview(request, buddy, rating, comment){ 
		buddy.receiveReview(new Review(this.name, rating, comment))
		
		// const removedFromUpcomingEvents = this.upcomingEvents.filter(function(req) {
		//     return req !== request; 
		// });  instead change status of request to closed
		// this.upcomingEvents = removedFromUpcomingEvents;
	}

	receiveReview(rating){ 
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;  
		this.num = this.num + 1;
		this.average_rating = this.sum/this.num;
	}
}
