
class CarryBuddy{
	constructor(name, location, email, requests, ratings){
		this.name = name;
		this.location = location;
		this.email = email;
		this.requests = []; 
		this.ratings = [];
		this.average_rating = 0;
		this.sum = 0;
		this.num = 0;
	}

	publishRequest(request){
		this.requests.push(request);
		allOpenRequests.push(request);
	}

	viewNearbyRequests(location){
		if (allOpenRequests.length < 0) {
			console.log("No carry buddies are needed here right now.")
		}
		else {
			console.log("Here are the open requests in " + arguments[0] + ":");
			let filteredRequests = [];
			filteredRequests = allOpenRequests;

			function getKeyByValue(filteredRequests, location) {   // https://stackoverflow.com/questions/9907419/javascript-object-get-key-by-value
				return Object.keys(filteredRequests).find(key => filteredRequests[key] === location);
			}


			//filteredRequests.map(location) {
			//	console.log(Object.getOwnPropertyNames(filteredRequests));
			//};
			// IF location matches Berlin:
			// in allOpenRequests loop through by location name,
			// return only 'name, location, email and request'" 
		}

	}

	viewNearbyBuddies(buddies, location){  // do the same above, but for ppl
		// return list of ALL people
		// in location X
		// return only name, location, email, average rating
	}

	offerHelp(buddy, request) {
		// hi buddy, i can help out w request
	}

	confirmHelp(buddy, request) {
		// hi buddy, i accept help w request
		buddy.sendConfirmation()
	}

	sendConfirmation(){
		// send same message to both?
		console.log("Buddy X and X will meet at date, location to carry item X.");
	}

	writeFeedback(buddy, rating, comment){
		buddy.receiveFeedback(new Feedback(rating, comment, this))
		this.request.remove // find by name and remove
	}

	receiveFeedback(rating){ // by monikks
		this.ratings.push(rating);
		this.sum = this.sum + rating.rating;
		this.num += 1;
		this.average_rating = this.sum/this.num;
	}



}

class Request {
	constructor(owner, itemName, location, date, time){
		this.owner = owner;
		this.itemName = itemName;
		this.location = location;  // do I need this here?
		this.date = date;
		this.time = time;
	}
}

class Review {
	constructor(buddy, rating, comment){
		this.buddy = buddy;
		this.rating = rating;
		this.comment = comment;
	}
}


const allOpenRequests = []; 

carrybuddy1 = new CarryBuddy("Gracia", "Berlin", "g@racia.com")



