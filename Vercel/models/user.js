const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    name: {
        type: String
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    mobile:{
        type: Number
    },
    role: {
        type: String,
        default: "user"
    }, 
    isDelete: {
        type: Boolean,
        default: false
    }
},  {timestamps: true})


module.exports = mongoose.model('user', userSchema);