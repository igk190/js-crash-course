const express = require('express')
const router = express.Router()

const LunchService = require('../services/lunch-service')

router.get('/', async (req, res, next) => {
    res.send(await LunchService.findAll()) 
})

router.get('/all', async (req, res, next) => {
    const lunches = await LunchService.findAll()
    res.render('lunch-list', {lunches})   // view
})

router.get('/:lunchId', async (req, res, next) => {
    const lunch = await LunchService.find(req.params.lunchId)

    res.render('lunch-detail', {lunch})
})

router.post('/', async (req, res, next) => {
    const lunch = await LunchService.add(req.body)
    res.send(lunch)
})

router.delete('/:userId', async (req, res, next) => {
    await LunchService.del(req.params.lunchId)
    res.send('ok!')
})

// router.post('/userId/friends', async (req, res, next) => {
//     const user = await LunchService.find(req.params.userId)
//     const target = await LunchService.find(req.body.targetId)

//     user.friends.addToSet(target)
//     const updatedUser = await user.save()
//     res.send(updatedUser)
// })

module.exports = router

// app.get('/lunch/all', async (req, res, next) => {
//     const lunches = await LunchService.findAll()

//     res.render('lunch', {lunches})
// })