const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3030;

app.use(bodyParser.json());
app.use('/', express.static("public"))

//This route already used
//app.get('/', (req, res) => res.send('Hello You, Moron!'))

//A query requires a key value pair but a parameter does not!
//to send multiple queries
// app.get('/api', function(req, res){
//     const userName = req.query.username;
//     const userId = req.query.id;
//     const message = req.query.message;
//     const reply = `${userName} ${userId} ${message}`
//     res.send(`${reply}`);
//     console.log(userName);
// })


const data = [];

//set up a route to accept post requests
app.post('/api/', function(req, res){
    const userName = req.body.userName;
    const userId = req.body.userId;
    const message = req.body.message;
    const reply = `"${userName} with id of ${userId} is saying ${message}"`;
    res.send(reply);
    console.log(reply);
    const temp = {
        userName,
        userId,
        message
    }
    data.push(temp);

    console.log(data);
})

app.get("/getallusers", function (req, res) {
    res.send(data);
})


//addGET request that sends parameters
app.get('/showprofile/:userName', function(req, res){
const user = req.params.userName;
console.log(user);
    res.send(`"showprofile" for ${user} is working!`)
})

////testing Nodemon
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//you can send querys and oarameters on a request