const express = require('express')
const app = express()
const port = 3000;

app.use('/', express.static("public"))

//This route already used
app.get('/', (req, res) => res.send('Hello You, Moron!'))

//A query requires a key value pair but a parameter does not!
//to send multiple queries
app.get('/api', function(req, res){
    const userName = req.query.username;
    const userId = req.query.id;
    const message = req.query.message;
    const reply = `${userName} ${userId} ${message}`
    res.send(`${reply}`);
    console.log(userName);
})
//addGET request that sends parameters
app.get('/showprofile/:userName', function(req, res){
const user = req.params.userName;
console.log(user);
    res.send(`"showprofile" for ${user} is working!`)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//you can send querys and oarameters on a request