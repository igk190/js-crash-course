const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)

const LunchSchema = mongoose.Schema({
	location: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	time: {
		type: String,
		required: true
	},
	hostId: {
		type: String,
		required: true
	},
	guestId: {
		type: String
	},
	status: {
		type: String,
		default: "open" // pending, closed
	},
	meetupPoint: {
		type: String
	}
})
LunchSchema.plugin(AutoIncrement, { inc_field: 'lunchId'})
module.exports = mongoose.model('Lunch', LunchSchema)


