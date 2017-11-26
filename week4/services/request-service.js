const fs = require('fs')

const RequestModel = require('../Models/request') 

async function findAll() { 
    return RequestModel.find()     
}

async function add(request) {
    return RequestModel.create(request)
} 

async function del(id) {
    return RequestModel.remove({ id })
}

async function find(requestId) {
    return RequestModel.findOne({ requestId }) // .populate(friends)
} 

async function findByLocation(location) {
    var auxLocation = location[0].toUpperCase() + location.slice(1);
    const requestsByLocation = RequestModel.find({ 'location': auxLocation })
    return requestsByLocation
}

module.exports = {
    findAll,
    find,
    findByLocation,
    add,
    del
}
