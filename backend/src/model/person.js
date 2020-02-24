let mongoose = require('mongoose')
let personSchema = new mongoose.Schema({
  name: String,
  street: String,
  city: String,
  country: String
})

module.exports = mongoose.model('Person', personSchema)
