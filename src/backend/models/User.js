const { type } = require('@testing-library/user-event/dist/type');
const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema =new Schema({
    name : {
        type:String,
        require:true
    },
    email : {
        type:String,
        require:true
    },
    password : {
        type:String,
        require:true
    }
})

const User = mongoose.model('User',userSchema);
module.exports = User;