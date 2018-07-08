const mongoose = require('mongoose')
const Schema = mongoose.Schema

const EmailAccountSchema = new Schema({
    userid: { type: Schema.Types.ObjectId, required: true, ref: 'User' },
    email: { type: Schema.Types.String, required: true },
    password: { type: Schema.Types.String, required: true }
})

module.exports = mongoose.model('FavProfile', EmailAccountSchema)