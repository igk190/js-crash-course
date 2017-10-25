let allOpenRequests = []; 


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
		allOpenRequests.push(request);
	}

	viewNearbyRequests(location){  // look for one location at a time
		let openRequestsByLocation = allOpenRequests.filter(function(loc) {
				return loc.location === location
			});

		if (openRequestsByLocation.length < 0) {
			console.log("No open requests in this area right now.")
		}
		else {
			console.log("Here are the open requests in " + arguments[0] + ":");
			console.log(openRequestsByLocation);
		} // extra @ else: return only item, location, name, date, time.

	}

	viewNearbyBuddies(location){		
		let nearbyBuddies = carrybuddies.filter(function(bud) {
			return bud.location === location
		});

		if (nearbyBuddies.length < 0) {
			console.log("Sorry, no one around here.");
		}

		else {
			console.log(nearbyBuddies);
		}
		// extra @ else: return only name, location, email, average rating per buddy

	}

	offerHelp(buddy, request) {
		this.upcomingEvents.push(request); // add check if request.budFound = true already
		buddy.receiveHelp();
		this.receiveConfirmation();
		buddy.receiveConfirmation();

		// delete from AllOpenRequests[];
	}

	receiveHelp(buddy, request) {
		this.upcomingEvents.push(request)
		this.request.buddyFound = true;
		this.requests.remove(request);
	}


	receiveConfirmation(buddy, request){ // mssg to both parties?
		// get all info for item x 
		console.log("Buddy X and X will meet at date, location to carry item X.");
	}

	writeReview(buddy, rating, comment){ // by monikks
		buddy.receiveReview(new Review(rating, comment, this))
		this.upcomingEvents.remove(request);
		buddy.upcomingEvents.remove(requests);
		// args stimmen nicht at all
	}

	receiveReview(rating){ // by monikks
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;
		this.num += 1;
		this.average_rating = this.sum/this.num;
	}



}

class Request {
	constructor(itemName,location, owner, date, time, buddyFound){
		this.itemName = itemName;
		this.location = location;  // do I need this?
		this.owner = owner; // SET TO OWNER whos array it is pushed to
		this.date = date;
		this.time = time;
		this.buddyFound = false;

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
getCarryBuddyByLocation = location => carr //// ?

carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com");
carrybuddy2 = new CarryBuddy("Piet", "Berlin", "p@iet.com");
carrybuddy3 = new CarryBuddy("Henk", "Stuttgart","h@enk.com");

carrybuddies.push(carrybuddy1);
carrybuddies.push(carrybuddy2);
carrybuddies.push(carrybuddy3);


