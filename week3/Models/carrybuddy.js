const Database = require('../Data/database')
// let carrybuddies = Database.carrybuddies;
// let allRequests = Database.allRequests;
const Review = require('./review')
const Request = require('./review')

module.exports = class CarryBuddy{
	constructor(name, location, email, requests, upcomingEvents, ratings){
		this.name = name;
		this.location = location;
		this.email = email;
		this.requests = []; 
		this.upcomingEvents = [];
		this.ratings = [];
		this.average_rating = 0;
		this.sum = 0;
		this.num = 0;
	}

	static create(obj) {
		return new CarryBuddy(obj.name,
							  obj.location,
							  obj.email,
							  obj.requests,
							  obj.upcomingEvents,
							  obj.ratings,
							  obj.average_rating,
							  obj.sum,
							  obj.num)
	}

	publishRequest(request){
		this.requests.push(request);
		request.owner = this.name;
		allRequests.push(request);
	}

	viewNearbyRequests(location){
		let openRequestsByLocation = allRequests.filter(function(loc) {
				return loc.location === location
			});

		if (openRequestsByLocation.length === 0) {
			console.log("No open requests in " + location + " right now.")
		}
		else {
			console.log("Here are the open requests in " + arguments[0] + ":");
			//console.log(JSON.stringify(openRequestsByLocation));
			const x = openRequestsByLocation;
			for (var i = 0, len = x.length; i < len; i++) {
			    console.log("REQUEST "+ (i + 1) + ", item: " + x[i]["itemName"] + ", location: " +
			     x[i]["location"] + ", owner: " + x[i]["owner"] + ", date: " + x[i]["date"] + ", time: " + x[i]["time"])
			    } 
		}
	}

	viewNearbyBuddies(location){		
		let nearbyBuddies = carrybuddies.filter(function(o) {
			return o.location === location	
		});

		if (nearbyBuddies.length === 0) {
			console.log("Sorry, no buddies to be found in " + location + ".");
		}
		else {
			console.log("Here are all carry buddies in " + arguments[0] + ":");
			//console.log(nearbyBuddies);


			const y = nearbyBuddies;
			for (var i = 0, len = y.length; i < len; i++) {
			    console.log("BUDDY "+ (i + 1) + ", name: " + y[i]["name"] + ", location: " +
			     y[i]["location"] + ", email: " + y[i]["email"] + ", average_rating: " + y[i]["average_rating"])
			    }
		} 
	}

	offerHelp(buddy, request) {
		this.upcomingEvents.push(request);
		buddy.receiveHelp(request);
		this.receiveConfirmation(request);
	}

	receiveHelp(request) {
		this.upcomingEvents.push(request)

		const removedFromRequests = this.requests.filter(function(req) {
		    return req !== request; 
		});
		this.requests = removedFromRequests;
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
		
		const removedFromUpcomingEvents = this.upcomingEvents.filter(function(req) {
		    return req !== request; 
		});
		this.upcomingEvents = removedFromUpcomingEvents;
	}

	receiveReview(rating){ // thanks monikks
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;  
		this.num = this.num + 1;
		this.average_rating = this.sum/this.num;
	}
}

