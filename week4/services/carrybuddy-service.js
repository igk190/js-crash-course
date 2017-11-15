const fs = require('fs')

const CarryBuddyModel = require('../Models/carrybuddy')

const dbPath = `${__dirname}/../carrybuddies.json` // path to Data folder?

function findAll() { 
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const carrybuddies = JSON.parse(file).map(CarryBuddyModel.create) // make create work

            resolve(carrybuddies)
        })
    })
}

async function add(carrybuddy) {
    const allCarryBuddies = await findAll()
    const lastCarryBuddy = allCarryBuddies[allCarryBuddies.length - 1]
    const lastCarryBuddyId = lastCarryBuddy && lastCarryBuddy.id || 0
    carrybuddy.id = lastCarryBuddyId + 1

    // carrybuddy = CarryBuddyModel.create(carrybuddy) // get create working
    carrybuddy = new CarryBuddyModel(carrybuddy)
    // or person = new PersonModel(person) // pass object w age&name attr
    allCarryBuddies.push(carrybuddy)

    await saveAll(allCarryBuddies)

    return carrybuddy
} 

async function del(carryBuddyId) {
    const allCarryBuddies = await findAll()
    const carryBuddyIndex = allCarryBuddies.findIndex(p => p.id == carryBuddyId)
    if (carryBuddyIndex < 0) return

    allCarryBuddies.splice(carryBuddyIndex, 1)

    saveAll(allCarryBuddies)
}

async function find(carryBuddyId) {
    const allCarryBuddies = await findAll()

    return allCarryBuddies.find(p => p.id == carryBuddyId)
} ///

async function saveAll(carrybuddies) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(carrybuddies), (err, file) => {
            if (err) return reject(err)

            resolve()
        })
    })
}

module.exports = {
    findAll,
    find,
    add,
    del
}
