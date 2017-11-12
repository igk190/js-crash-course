const Database = require('../Data/database')
const allRequests = Database.allRequests;

module.exports = class Request {
	constructor(itemName,location, date, time, id, carrybuddyownerID, carrybuddyhelperID){
		this.itemName = itemName;
		this.location = location; 
		this.date = date;
		this.time = time;
		this.id = id;
		this.carrybuddyownerID = carrybuddyownerID;
		this.carrybuddyhelperID = carrybuddyhelperID;
		this.status = 'open'; // open, pending, closed
	}

	static create(obj) {
		return new Request(
			obj.itemName,
			obj.location,
			obj.date,
			obj.time,
			obj.id,
			obj.carrybuddyID
		)
	}
	

}

