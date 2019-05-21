const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const userSchema = new Schema({
    username: {
        type: String,
        required: true        
    },
    message: String
});

module.exports = mongoose.model('User', userSchema); //'User' ---> becomes 'users' <---- thats the collection name
//optional third parameter ---> overrides collection name