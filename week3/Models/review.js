module.exports = class Review {
	constructor(buddy, rating, comment){
		this.buddy = buddy;
		this.rating = rating;
		this.comment = comment;
	}

	static create(obj) {
		return new Review(obj.buddy, obj.rating, obj.comment)
	}
}