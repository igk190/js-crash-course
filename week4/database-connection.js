// const mongoose = require('mongoose')

// mongoose.Promise = global.Promise

// const connectionString = process.env.DB_URL || 'mongodb://localhost/wtm'

// mongoose.connect(connectionString, { useMongoClient: true })


const mongoose = require('mongoose')

mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/carrybuddy', { useMongoClient: true })