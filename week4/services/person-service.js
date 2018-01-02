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
    return PersonModel.findOne({ id }) 
} 


async function findByLocation(location) {
    var auxLocation = location.toLowerCase();
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
