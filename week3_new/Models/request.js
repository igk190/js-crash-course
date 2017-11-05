module.exports = class Request {
	constructor(itemName,location, date, time, id, carrybuddyID){
		this.itemName = itemName;
		this.location = location; 
		this.date = date;
		this.time = time;
		this.id = id;
	    this.carrybuddyID = carrybuddyID;
	}

	static create(obj) {
		return new Request(
			obj.itemName,
			obj.location,
			obj.date,
			obj.time
		)
	}

	getRequestsByCarryBuddyID(id) {
		getCarryBuddyRequests = carrybuddyID => allRequests.find(function(o){return o.carrybuddyID === carrybuddyID;});		
	}
}

