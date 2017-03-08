let db = require('../db')
const mongoose = require('mongoose');

let Schema = mongoose.Schema

let userSchema = new Schema({
  name: {type: String, require: true},
  memberId: {type: String, require: true},
  address: String,
  zip: String,
  phone: String
})

let User = mongoose.model('User', userSchema)

module.exports = User
