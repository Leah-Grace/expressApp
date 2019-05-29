const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const port = 3030;
const keys = require('./keys')
const User = require('./models/User');
const api = require('./routes/api');

//Connecting mongodb
const mongoose = require('mongoose');
mongoose.connect(keys.mongoDBUrl, {useNewUrlParser: true})
.then(() =>{console.log(`Mongodb is connected`)});

app.use(bodyParser.json());
//app.use('/', express.static("public"));
app.use(express.static('public'));

const data = [];

app.use('/api', api);

////testing Nodemon
app.listen(port, () => console.log(`Example app listening on port ${port}!`))

//you can send querys and oarameters on a request