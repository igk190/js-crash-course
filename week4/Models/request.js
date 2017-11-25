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
        default: Date.now,
    },
    status: {
        type: String,
        default: "open" // pending, closed
    },
    ownerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
        required: true,
    },
    helperID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    }
    
});
RequestSchema.plugin(AutoIncrement, { inc_field: 'requestId' })

module.exports = mongoose.model('Request', RequestSchema)