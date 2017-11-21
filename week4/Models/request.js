const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const RequestSchema = mongoose.Schema({ 
    itemName: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    status: {
        type: String,
        default: "open"
    },
    ownerID: {
        type: Number,
        required: true,
    },
    helperID: {
        type: Number
    }
    
});
PersonSchema.plugin(AutoIncrement, { inc_field: 'id' })

module.exports = mongoose.model('Person', PersonSchema)