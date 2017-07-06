var mongoose = require('mongoose')

var restaurantSchema = new mongoose.Schema({
  name : {
    type : String,
    required : [true, "name cannot empty"]
  },
  owner : {
    type : String,
    required : [true, "owner cannot empty"]
  },
  address : {
    type : String,
    required : [true, "address cannot empty"]
  }
})

var Restaurant = mongoose.model('Restaurant', restaurantSchema)

module.exports = Restaurant
