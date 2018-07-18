'use strict'
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    imageuri: { type: Schema.Types.String, required: true },
    profilename: { type: Schema.Types.String, required: true, unique: true },
    originfollow: { type: Schema.Types.Number, require: true},
    originprofileuri: { type: Schema.Types.String, required: true, lowercase: true },
    tags: { type: [Schema.Types.String] }
})

module.exports = mongoose.model('Profile', ProfileSchema)