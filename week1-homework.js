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

		if (openRequestsByLocation.length === 0) { // not functioning atm.
			console.log("No open requests in this area right now.")
		}
		else {
			console.log("Here are the open requests in " + arguments[0] + ":");
			console.log(openRequestsByLocation);
		} // extra @ else: return only item, location, name, date, time.

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
			
			for (var singleProps in nearbyBuddies) {  // trying to access props of individual objects in nearbybuddies array..
				Object.keys(singleProps).forEach(function(key) { // 0: 0
					(console.log(key + ': ' + singleProps[key]));
				})
			} // closing for loop

		} // closing else
		// extra @ else: return only name, location, email, average rating per buddy

	}

	offerHelp(buddy, request) { // buddy2 = this 
		this.upcomingEvents.push(request); // add check if request.budFound = true already
		buddy.receiveHelp();
		this.receiveConfirmation();
	}

	receiveHelp(request) {
		this.upcomingEvents.push(request) // y u no working
	//	this.request[0].buddyFound = true; extra
		function removedFromRequests(request) { // Y U NO WORKING
			return this.requests.request.itemName !== request;
		}
		console.log(removedFromRequests);

		function removedFromAllOpenRequests(request) { // Y U NO WORKING
			return allOpenRequests.request.itemName !== request;
		}
		console.log(removedFromAllOpenRequests);		

		this.receiveConfirmation();
	}


	receiveConfirmation(){ //
		// get all info for item x 
		console.log("Dear " + this.name + ',');
		console.log("You have an event coming up. Please check your upcoming events.");
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

console.log("++++++++++++++++++++++++++++++++++++++++++")
carrybuddy1.viewNearbyBuddies("Berlin")
carrybuddy1.viewNearbyBuddies("Bllllln")

var bed = new Request("bed", "Berlin")
var couch = new Request("couch", "Berlin")

carrybuddy1.publishRequest(bed)
carrybuddy1.publishRequest(couch)
//carrybuddy1.publishRequest(request1 = new Request("really big cupboard", "Berlin"))
//carrybuddy1.publishRequest(request1 = new Request("bed", "Berlin"))

carrybuddy2.viewNearbyRequests("Berlin")
carrybuddy2.viewNearbyRequests("Bllllln")

carrybuddy2.offerHelp(carrybuddy1, bed)
