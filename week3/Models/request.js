module.exports = class Request {
	constructor(itemName,location, date, time){
		this.itemName = itemName;
		this.location = location; 
		this.date = date;
		this.time = time;
		//this.status = open;
	}

	static create(obj) {
		return new Request(obj.itemName,
						   obj.location,
						   obj.date,
					       obj.time)
	}
}

