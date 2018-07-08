const mongoose = require('mongoose')
const Schema = mongoose.Schema

const FavTagSchema = new Schema({
    userid: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    tag: { type: String, required: true }
})

module.exports = mongoose.model('FavTag', FavTagSchema)