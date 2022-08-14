const mongoose = require('mongoose')
const { Schema } = mongoose 

const UserSchema = new Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created_at: { type: Number, default: Date.now() },
    updated_at: { type: Number, default: Date.now() }
})

module.exports = mongoose.model('User', UserSchema)