const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const SALT_WORK_FACTOR = 6;

const User = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email:  {
        type: String,
        unique: true,
        required: true
    }
});

User.pre('save', function(next) {
    const user = this;
   
    //generate a password when the password changes or a new password
    if(!user.isModified('password')) return next();

    //generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(error, salt) {
        if(error) return next(error);
        //combining salt to generate new hash
        bcrypt.hash(user.password, salt, function(error, hashPassword) {
            user.password = hashPassword;
            next();
        } )
    })
})

User.methods.comparePassword = function (userPassword, cb) {
    bcrypt.compare(userPassword, this.password, function(error, isMatch) {
        console.log('compare', userPassword , this.password, isMatch)
        if(error) return next(error);
        cb(null, isMatch);
    })
}





module.exports = mongoose.model('User', User);