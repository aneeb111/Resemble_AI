const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        unique: true,
        required: true
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        unique: true,
        required: true
    },
    verifiedUser: {
        type: Boolean,
        default: false
    }

},
    { timestamps: true }
)
module.exports = mongoose.model("User", UserSchema)