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

class Request {
	constructor(itemName,location, date, time){
		this.itemName = itemName;
		this.location = location; 
		this.date = date;
		this.time = time;
		//this.status = open;
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
