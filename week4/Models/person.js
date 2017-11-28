const mongoose = require('mongoose')
const AutoIncrement = require('mongoose-sequence')(mongoose)


const PersonSchema = mongoose.Schema({ 
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
        lowercase: true
    },
    
});
PersonSchema.plugin(AutoIncrement, {id: 'person', inc_field: 'id' })

module.exports = mongoose.model('Person', PersonSchema)