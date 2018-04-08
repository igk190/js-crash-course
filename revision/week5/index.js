const express = require('express')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

require('./database-connection')

const app = express()

app.use(bodyParser.json()) // parse body of each request as JSON
app.use(cookieParser())
app.set('view engine', 'pug')

const user = require('./routes/user')
const lunch = require('./routes/lunch')

app.use('/user', user)
app.use('/lunch', lunch)

app.get('/', (req, res, next) => {
    res.render('index')
})

app.listen(3300, () => {
    console.log('Server listening.')
})  

 
// user makes lunch, view lunches real and unreal location
// join lunch

