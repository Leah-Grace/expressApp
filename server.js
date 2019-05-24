const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3030;
const keys = require('./keys')
const User = require('./models/User');

//Connecting mongodb
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true})
.then(() =>{console.log(`Mongodb is connected`)});

app.use(bodyParser.json());
//app.use('/', express.static("public"));
app.use(express.static('public'));

const data = [];

//set up a route to accept post requests
app.post('/api/', function(req, res){
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

app.get("/getallusers", function (req, res) {
    User.find().then(results => {
        console.log(results);
        res.send(results);
    });
});


//addGET request that sends parameters
app.get('/showprofile/:username', function(req, res){
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

////testing Nodemon
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//you can send querys and oarameters on a request