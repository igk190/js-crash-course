const fs = require('fs')

const UserModel = require('../models/user')

const dbPath = `${__dirname}/../database.json`

function findAll() {
    return new Promise((resolve, reject) => {
        fs.readFile(dbPath, 'utf8', (err, file) => {
            if (err) return reject(err)

            const users = JSON.parse(file).map(UserModel.create)

            resolve(users)
        })
    })
}

async function add(user) {
    const allUsers = await findAll()
    const lastUser = allUsers[allUsers.length - 1]
    const lastUsersId = lastUser && lastUser.id || 0
    user.id = lastUsersId + 1

    user = UserModel.create(user)
    allUsers.push(user)

    await saveAll(allUsers)

    return user
}

async function del(userId) {
    const allUsers = await findAll()
    const userIndex = allUsers.findIndex(u => u.id == userId)
    if (userIndex < 0) return

    allUsers.splice(userIndex, 1)

    saveAll(allUsers)
}

async function find(userId) {
    const allUsers = await findAll()

    return allUsers.find(u => u.id == userId)
}

async function saveAll(users) {
    return new Promise((resolve, reject) => {
        fs.writeFile(dbPath, JSON.stringify(users), (err, file) => {
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
