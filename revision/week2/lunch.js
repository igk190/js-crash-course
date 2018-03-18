module.exports = class Lunch{

	constructor(location, date, time, lunchID, hostID, guestID, status, meetupPoint){
	this.location = location;
	this.date = date;
	this.time = time;
	this.lunchID = lunchID;
	this.hostID = hostID;
	this.guestId = guestID; 
	this.status = "open"; // pending, closed
	this.meetupPoint = meetupPoint;
	}
}


