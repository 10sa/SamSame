const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProfileTagSchema = new Schema({
    profileid: {type: Schema.Types.ObjectId, required: true, ref: 'Profile'},
    tag: {type: String, required: true}
})

module.exports = mongoose.model('FavProfile', ProfileTagSchema)