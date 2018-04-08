const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const hostname = 'localhost'
const database = 'wtm-revision'

mongoose.connect(`mongodb://${hostname}/${database}`)