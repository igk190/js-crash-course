let allOpenRequests = []; 


class CarryBuddy{
	constructor(name, location, email, requests, ratings, events){
		this.name = name;
		this.location = location;
		this.email = email;
		this.requests = []; 
		this.ratings = [];
		this.events = [];
		this.average_rating = 0;
		this.sum = 0;
		this.num = 0;
	}

	publishRequest(request){
		this.requests.push(request);
		allOpenRequests.push(request);
	}

	viewNearbyRequests(...location){  // works with ...? to search +1 locations
		if (allOpenRequests.length < 0) {
			console.log("No carry buddies are needed here right now.")
		}
		else {
			console.log("Here are the open requests in " + arguments[0] + ":");
			let requestsBeforeFiltering = [];
			requestsBeforeFiltering = allOpenRequests;

			filteredRequests = location => requestsBeforeFiltering.find(function(o){
				return o.location === location;
			});
			console.log(filteredRequests);

		}

	}

	viewNearbyBuddies(location){  // do the same above, but for ppl
		// return list of ALL people
		// in location X
		// return only name, location, email, average rating
	}

	offerHelp(buddy, request) {
		// person2 chooses to help person1 in UI push a button..
		// set buddy1.request.whatevername.buddyFound to True
		// if above set to True: buddy1.requests.whatevername remove from reuqests
		// delete from AllOpenRequests[];
		// to both buddies: receive confirmation with all info.
	}


	receiveConfirmation(){
		// send same message to both?
		// get all info for item x 
		console.log("Buddy X and X will meet at date, location to carry item X.");
	}

	writeFeedback(buddy, rating, comment){
		buddy.receiveFeedback(new Feedback(rating, comment, this))
	}

	receiveFeedback(rating){ // by monikks
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;
		this.num += 1;
		this.average_rating = this.sum/this.num;
	}



}

class Request {
	constructor(itemName, location, date, time, buddyFound){
		this.itemName = itemName;
		this.location = location;  // do I need this here?
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

carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com");
carrybuddy2 = new CarryBuddy("Piet", "Berlin", "p@iet.com");
carrybuddy3 = new CarryBuddy("Henk","Stuttgart","h@enk.com");

carrybuddies.push(carrybuddy1);
carrybuddies.push(carrybuddy2);
carrybuddies.push(carrybuddy3);


