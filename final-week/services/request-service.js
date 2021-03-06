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
    const newOwnerId = await PersonModel.findOne({ "id": request.ownerId })
    request.ownerId = newOwnerId._id
    return RequestModel.create(request)
}

async function del(requestId) {
    return RequestModel.remove({ requestId })
}

async function find(id) {  
    return RequestModel.findOne({ id }).populate('ownerId')
} 

async function findByLocation(location) {
    var auxLocation = location[0].toUpperCase() + location.slice(1);
    const requestsByLocation = RequestModel.find({ 'location': auxLocation }).populate('ownerId')
    return requestsByLocation
}

// async function findAllRequestsFromPersonXxByID(ownerId) {
//     return RequestModel.find({ ownerId}).populate('ownerId');
// }
async function findAllRequestsFromPersonXxByID(ownerId) {
    const newOwnerId = await PersonModel.findOne({ "id": ownerId })
    const id = newOwnerId._id
    return RequestModel.find({ 'ownerId': id}).populate('ownerId');
}

module.exports = {
    findAll,
    find,
    findByLocation,
    add,
    del,
    findAllRequestsFromPersonXxByID
}
