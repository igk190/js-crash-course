const fs = require('fs');
const Seeder = require('./seeder')
const express = require('express')
const Database = require('./Data/database')
const bodyParser = require('body-parser')
const CarryBuddyService = require('./services/carrybuddy-service')

const app = express();

app.set('view engine', 'pug') // when render, use pug

app.use(bodyParser.json())

app.get('/',  (req, res, next) => {
    res.render('index')
    
    // res.sendFile(__dirname + '/index.html')
    
    // res.send(await CarryBuddyService.findAll())
}) 

app.get('/carrybuddy/all', async (req, res, next) => {
    const carrybuddies = await CarryBuddyService.findAll()

    res.render('carrybuddy', { carrybuddies })
})

app.post('/carrybuddy', async (req, res, next) => {
    const carrybuddy = await CarryBuddyService.add(req.body)
    res.send(carrybuddy)
})

app.delete('/carrybuddy/:id', async (req, res, next) => {
    await CarryBuddyService.del(req.params.id) // check ID!!!!!!!
    res.send('ok!')
})

function main() {
    
    Seeder.seedDatabase();
    
    let carrybuddies = Database.load('carrybuddies')
    let requests =  Database.load('requests')
    let reviews = Database.load('reviews')
    
}

main() // not in wk 4 index

app.listen(5000, () => { // cb: method that gets executed after an event
    console.log('Server listening')
})