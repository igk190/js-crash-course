let allRequests = []; 

class CarryBuddy{
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
			console.log("No open requests in this area right now.")
		}
		else {
			console.log("Here are the open requests in " + arguments[0] + ":");
			console.log(JSON.stringify(openRequestsByLocation));
			console.log("end");

			const x = openRequestsByLocation;
			for (var i = 0, len = x.length; i < len; i++) {
			    console.log("REQUEST "+ (i + 1) + ", item: " + x[i]["itemName"] + ", location: " + x[i]["location"] + ", ");
                console.log(" owner" + x[i]["owner"] + "date" + x[i]["date"])
			    } 
		}
	}

	viewNearbyBuddies(location){		
		let nearbyBuddies = carrybuddies.filter(function(o) {
			return o.location === location	
		});

		if (nearbyBuddies.length === 0) {
			console.log("Sorry, no one around here.");
		}

		else {
			console.log("Here are all carry buddies in " + arguments[0] + ":");
			console.log(nearbyBuddies);


			const y = nearbyBuddies;
			for (var i = 0, len = y.length; i < len; i++) {
			    console.log("BUDDY "+ (i + 1) + ", name: " + y[i]["name"] + ", location: " + y[i]["location"] + ", ");
                console.log("email: " + y[i]["email"] + ", date: " + y[i]["date"])
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
		console.log("THIS REQUESTS :: ", JSON.stringify(this.requests));

		const removedFromAllRequests = allRequests.filter(function(reqs) {
		    return reqs !== request;
		})
		allRequests = removedFromAllRequests;
		console.log("ALL OPEN REQUESTS::", JSON.stringify(allRequests));
		
		this.receiveConfirmation(request);
	}


	receiveConfirmation(request){ //
		console.log("Dear " + this.name + ',');
		console.log("You have an event coming up. Please check your upcoming events.");
		console.log("item to be transported: " + request.itemName + " on " + request.date + " at " + request.time); 
	}

	writeReview(request, buddy, rating, comment){ // by monikks
		buddy.receiveReview(new Review(rating, comment, this))
		this.upcomingEvents.remove(request); // NOT WORKING
		buddy.upcomingEvents.remove(requests); // check args
	}

	receiveReview(rating){ // by monikks
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;
		this.num += 1;
		this.average_rating = this.sum/this.num;
	}
}

class Request {
	constructor(itemName,location, date, time, buddyFound, owner){
		this.itemName = itemName;
		this.location = location; 
		this.date = date;
		this.time = time;
		this.buddyFound = false;
		//this.owner = owner;
	}
}

class Review {
	constructor(buddy, rating, comment){
		this.buddy = buddy;
		this.rating = rating;
		this.comment = comment;
	}
}

carrybuddies = [];
getCarryBuddyByName = name => carrybuddies.find(function(o){return o.name === name;});

carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com");
carrybuddy2 = new CarryBuddy("Piet", "Berlin", "p@iet.com");
carrybuddy3 = new CarryBuddy("Henk", "Stuttgart","h@enk.com");
carrybuddy4 = new CarryBuddy("Truus", "Frankfurt", "t@ruus.com")

carrybuddies.push(carrybuddy1);
carrybuddies.push(carrybuddy2);
carrybuddies.push(carrybuddy3);
carrybuddies.push(carrybuddy4);


console.log("++++++++++++++++++++++++++++++++++++++++++")
carrybuddy1.viewNearbyBuddies("Berlin")
carrybuddy1.viewNearbyBuddies("Bxxxxn")

var bed = new Request("bed", "Berlin", )
var couch = new Request("couch", "Berlin")

carrybuddy1.publishRequest(bed)
carrybuddy1.publishRequest(couch)

carrybuddy2.viewNearbyRequests("Berlin")
carrybuddy2.viewNearbyRequests("Bxxxxn")

carrybuddy2.offerHelp(carrybuddy1, bed)
console.log("carrybuddy1 requests & upcoming events:" + JSON.stringify(carrybuddy1.requests) + "//" + JSON.stringify(carrybuddy1.upcomingEvents))
console.log("carrybuddy2:" + carrybuddy2.requests + "//" + carrybuddy2.upcomingEvents)