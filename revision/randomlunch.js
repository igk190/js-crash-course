let randomLunches = [];
let users = [];

class User{
	constructor(name, location, email, userId){
		this.name = name;
		this.location = location;
		this.email = email;
		this.userId = userId;
	}

	joinRandomLunchRequest(randomLunch){
		randomLunch.userIds.push(this.userId);

		if (randomLunch.userIds > 1) {
		    randomLunch.status = "pending";
		    console.log("Let's grab a bite!");
		} else {
		    console.log("test");
		}

	}

	viewRequestsByLocation(lunch){
		let requestsByLocation = randomLunches.filter((lunch) => {
			return lunch.location === lunch.location;
		});

		if (requestsByLocation.length === 0) {
			console.log("Sorry, no one here.")
		} else {
			console.log(requestsByLocation);
		}
	}

}

class RandomLunch{
	constructor(location, lunchDate, time, randomLunchId, userIds, status){
	this.location = location;
	this.lunchDate = lunchDate;
	this.time = time;
	this.status = "open"; // pending, closed
	this.randomLunchId = randomLunchId;
	this.userIds = []; 
	}
}


var user1 = new User("User1", "Berlin", "user1@gmail.com", 1);
var user2 = new User("User2", "Berlin", "user2@gmail.com", 2);
users.push(user1, user2);

let randomLunch1 = new RandomLunch("Berlin", "20-3-2018", "13:00", 1, 1)
randomLunches.push(randomLunch1);
console.log(randomLunch1);

user1.viewRequestsByLocation(randomLunch1);
user2.joinRandomLunchRequest(randomLunch1);
