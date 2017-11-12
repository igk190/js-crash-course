module.exports = class Review {
	constructor(id, carrybuddyID, rating, comment){
		this.rating = rating;
		this.comment = comment;
		this.id = id;
		this.carrybuddyID = carrybuddyID;
	}

	static create(obj) {
		return new Review(
			obj.id,
			obj.rating,
			obj.comment,
			obj.carrybuddyID
		)
	}
}