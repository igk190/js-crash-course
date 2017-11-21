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

async function find(personID) {
    return PersonModel.findOne({ id: personID }) 

} 

module.exports = {
    findAll,
    find,
    add,
    del
}
