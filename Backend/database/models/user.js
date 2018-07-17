const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    username: { type: Schema.Types.String, required: true },
    email: { type: Schema.Types.String, required: true },
    level: { type: Schema.Types.String, required: true, enum: ['User', 'Admin'] },
    recentsearchs: { type: [Schema.Types.String], maxlength: 5 },
    favprofiles: { type: [Schema.Types.ObjectId], ref: 'Profile' }
})

module.exports = mongoose.model('User', UserSchema)