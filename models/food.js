var mongoose = require('mongoose')

var foodSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true , "name mustn't empty"]
  },
  price : {
    type : Number,
    min : [0, "can't less than zero"],
    required : [true, "price can't empty"]
  }
})

var Food = mongoose.model('Food', foodSchema)

module.exports = Food
