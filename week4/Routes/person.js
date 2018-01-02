const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

router.get('/', async (req, res, next) => {
    res.send(await PersonService.findAll())
})

router.get('/all', async (req, res, next) => {
    const people = await PersonService.findAll()
    res.render('person-list', {people})
})

router.get('/:id', async (req, res, next) => {
    const person = await PersonService.find(req.params.id)

    res.render('person-detail', {person})
})


router.get('/all/:location', async (req, res, next) => {
    const peopleByLocation = await PersonService.findByLocation(req.params.location)
    res.render('people-by-location', {peopleByLocation})
})

router.post('/', async (req, res, next) => {
    const person = await PersonService.add(req.body)
    res.send(person)
})

// NEW with form
router.get('/', async (req, res, next) => {
    // const testFormInput = await PersonService.findByLocation(req.body.location)
    // res.render('people-by-location',testFormInput)
    console.log(req)
})

router.delete('/:id', async (req, res, next) => {
    await PersonService.del(req.params.id)

    res.send('ok!')
})

// router.post('/:personID/friends', async (req, res, next) => {
//     const person = await PersonService.find(req.params.personID)
//     const target = await PersonService.find(req.body.targetID)

//     person.friends.push(target)
//     await updatedPerson = await person.save()
//     res.send(updatedPerson)
// })


module.exports = router