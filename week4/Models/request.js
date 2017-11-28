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
    ownerId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    },
    helperId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Person',
    }
    
});
RequestSchema.plugin(AutoIncrement, { id: 'request', inc_field: 'id' })

module.exports = mongoose.model('Request', RequestSchema)