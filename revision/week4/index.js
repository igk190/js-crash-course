const express = require('express')
const bodyParser = require('body-parser')
const UserService = require('./services/user-service')

const app = express()

app.set('view engine', 'pug')

app.use(bodyParser.json()) // parse body of each req as JSON



/////// new
app.get('/', async (req, res, next) => {
    res.send(await UserService.findAll()) 
})

app.get('/user/all', async (req, res, next) => {
    const users = await UserService.findAll()

    res.render('user', {users})
})

app.post('/user', async (req, res, next) => {
    const user = await UserService.add(req.body)
    res.send(user)
})

app.delete('/user/:userId', async (req, res, next) => {
    await UserService.del(req.params.userId)
    res.send('ok!')
})

app.listen(3300, () => {
    console.log('Server listening.')
})
//////////////



// const User = require('./models/user');
// const Lunch = require('./models/lunch');
// const Database = require('./database');
// const red = require('ansi-red'); 

// let users = Database.users;
// let lunches = Database.lunches;

// var user1 = new User("User1", "Berlin", "user1@gmail.com", 1);
// var user2 = new User("User2", "Berlin", "user2@gmail.com", 2);
// var user3 = new User("User3", "Dresden", "user3@gmail.com", 3);
// users.push(user1, user2, user3);

// const Lunch1 = new Lunch("Berlin", "20-3-2018", "13:00", 1);
// const Lunch2 = new Lunch("Berlin", "09-09-2018", "13:30", 2);
// const Lunch3 = new Lunch('Leipzig', "10-09-2018", "12:30", 3);
// user1.publishLunch(Lunch1);
// user2.publishLunch(Lunch2);

// lunches.push(Lunch1, Lunch2, Lunch3);

// user1.viewLunchesByLocation('Berlin');
// user2.viewLunchesByLocation('Leipzig');
// user2.viewLunchesByLocation('ThisCityDontExist');

// user1.findLunchByID(3);
// user1.viewAllLunches();

// user2.joinLunch(Lunch1);
// user1.joinLunch(Lunch2);
// user2.findLunchByID(1);
// user2.findLunchByID(2);
// console.log("\n\n");

// Database.save(users, "users", (err) => {
//     console.log('we are done here.');
// });

// Database.save(lunches, "lunches", (err) => {
//     console.log("All lunches are saved!");
// });

// const main = async () => {
//     const loadedUsers = await Database.loadFile("users");
//     console.log(red("loaded users: "), loadedUsers)

//     const loadedLunches = await Database.loadFile("lunches");
//     console.log(red("loaded lunches: "), loadedLunches)
    
//     const parsedUsers = JSON.parse(loadedUsers) 
//     const firstPerson = User.create(parsedUsers[0]);
//     console.log("Hello I am: ")
//     firstPerson.sayName();
// }

// main()
