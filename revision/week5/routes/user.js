const express = require('express')
const router = express.Router()

const UserService = require('../services/user-service')

router.get('/', async (req, res, next) => {
    res.send(await UserService.findAll()) 
})

router.get('/all', async (req, res, next) => {
    const users = await UserService.findAll()
    res.render('user-list', {users})
})

router.get('/:userId', async (req, res, next) => {
    const user = await UserService.find(req.params.userId)

    res.render('user-detail', {user})
})

router.post('/', async (req, res, next) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

router.delete('/:userId', async (req, res, next) => {
    await UserService.del(req.params.userId)
    res.send('ok!')
})

router.post('/userId/friends', async (req, res, next) => {
    const user = await UserService.find(req.params.userId)
    const target = await UserService.find(req.body.targetId)

    user.friends.addToSet(target)
    const updatedUser = await user.save()
    res.send(updatedUser)
})

module.exports = router