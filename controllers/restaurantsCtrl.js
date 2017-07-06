
var Restaurant = require('../models/restaurant')

var getAll = function (req,res) {
  Restaurant.find({}, (err, restaurants) => {
    err ? res.status(500).send(err) : res.send(restaurants)
  })

}

var getOne = function (req,res) {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    err ? res.status(500).send(err) : res.send(restaurant)
  })
}

var create = function (req,res) {
  let restaurant = new Restaurant({
    name : req.body.name,
    owner : req.body.owner,
    address : req.body.address
  })
  restaurant.save((err,createdRestaurant) => {
    err ? res.status(500).send(err) : res.send(createdRestaurant)
  })
}

var update = function (req,res) {
  Restaurant.findById(req.params.id, (err, restaurant) => {
    if (err) {
      res.status(500).send(err)
    } else {
      restaurant.name = req.body.name || restaurant.name
      restaurant.owner = req.body.owner || restaurant.owner
      restaurant.address = req.body.address || restaurant.address

      restaurant.save((err, restaurant) => {
        err ? res.status(500).send(err) : res.send(restaurant)
      })
    }
  })
}

var remove = function (req,res) {
  Restaurant.findByIdAndRemove(req.params.id, (err, restaurant) => {
    if (err) res.status(500).send(err);
    var response = {
        message: "Restaurant successfully deleted",
        id: restaurant._id
    };
    res.send(response);
  });
}

module.exports = {
  getAll,
  getOne,
  create,
  update,
  remove
}
