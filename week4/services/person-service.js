const fs = require('fs')

const PersonModel = require('../Models/person') 

async function findAll() { 
    return PersonModel.find()     
}

async function add(person) {
    return PersonModel.create(person)
} 

async function del(id) {
    return PersonModel.remove({ id })
}

async function find(id) {
    return PersonModel.findOne({ id }) // .populate(friends)
} 


async function findByLocation(location) {
    var auxLocation = location[0].toUpperCase() + location.slice(1);
    const peopleByLocation = PersonModel.find({ 'location': auxLocation })
    return peopleByLocation
}

module.exports = {
    findAll,
    find,
    findByLocation,
    add,
    del
}
