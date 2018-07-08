const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavProfileSchema = new Schema({
    userid: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    profileid: { type: Schema.Types.ObjectId, required: true, ref: 'Profile' }
})

module.exports = mongoose.model('FavProfile', FavProfileSchema)