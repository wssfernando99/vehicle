
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : {
        type:String,
        required:true
    },
    email : {
        type:String,
        required:true
    },
    password : {
        type:String,
        required:true
    }
})
// Saving user data
// userSchema.pre('save', function (next) {
//     var user = this;
//     if (user.isModified('password')) {
//         //checking if password field is available and modified
//         bcrypt.genSalt(SALT, function (err, salt) {
//             if (err) return next(err)
        
//             bcrypt.hash(user.password, salt, function (err, hash) {
//                 if (err) return next(err)
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         next();
//     }
// });
     
// For comparing the users entered password with database duing login 
userSchema.methods.comparePassword = function (candidatePassword, callBack) {
        const isMatch = candidatePassword == this.password
        callBack(null, isMatch);
};

const User = mongoose.model('User',userSchema);
module.exports = User;