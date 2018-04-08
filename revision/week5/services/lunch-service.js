const fs = require('fs')

const LunchModel = require('../models/lunch-model')

async function findAll() {
    return LunchModel.find()
}

async function add(lunch) {
    return LunchModel.create(lunch)
}

async function del(lunchId) {
    return LunchModel.remove({ lunchId })
    // removeQuery.$where({age: {gt: 30}}).gte('height', 178) \n exec
}

async function find(lunchId) {
    return LunchModel.findOne({ lunchId })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
