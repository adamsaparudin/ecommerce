let db = require('../db')
const mongoose = require('mongoose');

let Schema = mongoose.Schema

let itemSchema = new Schema({
  itemCode: {type: String, require: true},
  name: {type: String, require: true},
  description: String,
  price: {type: Number, default: 1000000},
  stock: Number,
  qty: {type: Number, default: 1}
})

let Item = mongoose.model('Item', itemSchema)

module.exports = Item
