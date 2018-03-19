const User = require('./user');
const Lunch = require('./lunch');
const Database = require('./database');
const red = require('ansi-red');

let users = Database.users;
let lunches = Database.lunches;

var user1 = new User("User1", "Berlin", "user1@gmail.com", 1);
var user2 = new User("User2", "Berlin", "user2@gmail.com", 2);
var user3 = new User("User3", "Dresden", "user3@gmail.com", 3);
users.push(user1, user2, user3);

const Lunch1 = new Lunch("Berlin", "20-3-2018", "13:00", 1);
const Lunch2 = new Lunch("Berlin", "09-09-2018", "13:30", 2);
const Lunch3 = new Lunch('Leipzig', "10-09-2018", "12:30", 3);
user1.publishLunch(Lunch1);
user2.publishLunch(Lunch2);

lunches.push(Lunch1, Lunch2, Lunch3);

user1.viewLunchesByLocation('Berlin');
user2.viewLunchesByLocation('Leipzig');
user2.viewLunchesByLocation('ThisCityDontExist');

user1.findLunchByID(3);
user1.viewAllLunches();

user2.joinLunch(Lunch1);
user1.joinLunch(Lunch2);
user2.findLunchByID(1);
user2.findLunchByID(2);
console.log("\n\n");

Database.save(users, "users", (err) => {
    console.log('we are done here.');
});

Database.save(lunches, "lunches", (err) => {
    console.log("All lunches are saved!");
});

const main = async () => {
    const contents1 = await Database.loadFile("users");
    console.log(contents1)
    console.log("THOSE WERE CONTENTS 1 !")
}
main()
// const loadedUsers = Database.loadUsers();

// console.log(red("loaded users: "), loadedUsers);

// const convertedUsers = loadedUsers.map(User.create);
// convertedUsers[0].sayName();
// const firstPerson = User.create(loadedUsers[0].name, loadedUsers[0].email);

// firstPerson.sayName();
// const secondPerson = User.create(loadedUsers[1]);
// secondPerson.sayName();

// Database.saveLunches(lunches) 
// const loadedLunches = Database.loadLunches();
// console.log(red("loaded lunches: "), loadedLunches);


// console.log(loadedLunches[0]);
// user1.sayName();

