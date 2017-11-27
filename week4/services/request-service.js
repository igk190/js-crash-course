const fs = require('fs')
const mongoose = require('mongoose')

const PersonModel = require('../Models/person') 
const RequestModel = require('../Models/request') 

async function findAll() { 
    return RequestModel.find()     
}
// not original
// async function add(request) {
//     console.log("Request owner id: ", request.ownerId)
//     const futureOwner = PersonModel.findByCustomId(request.ownerId)
//     console.log("future owner bro:", futureOwner)
//     request.ownerId = futureOwner._id

//     const RequestQuery = RequestModel.create(request)
//     return RequestQuery
// } 
async function add(request) {
    
    const newOwnerId = PersonModel.findOne({ "id": request.ownerId })
    request.ownerId = newOwnerId._id
    return RequestModel.create(request)
}

async function del(requestId) {
    return RequestModel.remove({ requestId })
}

async function find(id) {  // should this be requestId?
    return RequestModel.findOne({ id }) // .populate(friends)
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
