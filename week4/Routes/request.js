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

router.get('/requestid/:id', async (req, res, next) => {
    const request = await RequestService.find(req.params.id)
    console.log("TEST REQUEST ROUTES" + request)
    res.render('request-detail', {request})
})


router.get('/all/:location', async (req, res, next) => {
    const requestsByLocation = await RequestService.findByLocation(req.params.location)
    res.render('requests-by-location', {requestsByLocation})
})

router.get('/owner/:ownerId', async (req, res, next) => {
    const allRequestsFromPersonXx = await RequestService.findAllRequestsFromPersonXxByID(req.params.ownerId)
    res.render('requests-from-person', {allRequestsFromPersonXx}) // Y U NO WORK
})

router.post('/', async (req, res, next) => {
    const request = await RequestService.add(req.body)
    res.send(request)
})


router.delete('/:id', async (req, res, next) => {
    await RequestService.del(req.params.id)

    res.send('ok!')
})

module.exports = router