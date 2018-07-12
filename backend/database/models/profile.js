const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    imageuri: String,
    profilename: String,
    originfollow: String,
    originprofileuri: String
})

module.exports = mongoose.model('Profile', ProfileSchema)