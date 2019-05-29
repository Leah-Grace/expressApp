const express = require('express');
const router = express.Router();
const User = require('../models/User'); //travel from this file up one level and then into the correct folder

router.get('/', (req, res) => res.send(`api route is working`));

//set up a route to accept post requests
router.post('/', function(req, res){
    const userName = req.body.userName;
    const message = req.body.message;
//    const reply = `"${userName} with id of ${userId} is saying ${message}"`;
   
    const data = {
        username: userName,
        message: message
    }
   
    console.log(data);

const user = new User(data);
user.save().then(() => {
    console.log("new user created");
    res.send(data);
});

});

//show all users
router.get("/getallusers", function (req, res) {
    User.find().then(results => {
        console.log(results);
        res.send(results);
    });
});

//addGET request that sends parameters
router.get('/showprofile/:username', function(req, res){
    const user = req.params.username;
 console.log(user);
User.find({username: user}).then(result => {
    console.log(`Showing ${user} profile ${result}`);
    res.send(result);
}).catch(err => {
    console.log(err);
    res.send(err);
});
});



module.exports = router;