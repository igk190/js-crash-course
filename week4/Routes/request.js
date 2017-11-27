const express = require('express')
const router = express.Router()

const PersonService = require('../services/person-service')

const RequestService = require('../services/request-service')

router.get('/', async (req, res, next) => {
    res.send(await RequestService.findAll())
})

router.get('/all', async (req, res, next) => {
    const requests = await RequestService.findAll()
    res.render('request-list', {requests})
})

router.get('/:requestId', async (req, res, next) => {
    const request = await RequestService.find(req.params.requestId)
   
    res.render('request-detail', {request})
})

router.get('/all/:location', async (req, res, next) => {
    const requestsByLocation = await RequestService.findByLocation(req.params.location)
    res.render('requests-by-location', {requestsByLocation})
})

// router.post('/', async (req, res, next) => {
//     const person = await PersonService.add(req.body)
//     res.send(person)
// })

router.post('/', async (req, res, next) => {
    const request = await RequestService.add(req.body)
    res.send(request)
})

// router.post('/:personId/friends', async(req, res, next) => {
//     const person = await PersonService.find(req.params.personId);
//     const target = await PersonService.find(req.body.targetId)

//     person.friends.addToSet(target) // instead of push
//     target.friends.addToSet(person)
//     await target.save()
//     const updatedPerson = await person.save()
    

    // person.friends.push(target) // then save back to db
    // res.send(updatedPerson)
// }) 

router.delete('/:id', async (req, res, next) => {
    await RequestService.del(req.params.id)

    res.send('ok!')
})

module.exports = router