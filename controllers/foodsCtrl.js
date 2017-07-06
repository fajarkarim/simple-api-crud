
var Food = require('../models/food')

var getAll = function (req,res) {
  Food.find({}, (err, foods) => {
    err ? res.status(500).send(err) : res.send(foods)
  })

}

var getOne = function (req,res) {
  Food.findById(req.params.id, (err, food) => {
    err ? res.status(500).send(err) : res.send(food)
  })
}

var create = function (req,res) {
  let food = new Food({
    name : req.body.name,
    price : req.body.price
  })
  food.save((err,createdFood) => {
    err ? res.status(500).send(err) : res.send(createdFood)
  })
}

var update = function (req,res) {
  Food.findById(req.params.id, (err, food) => {
    if (err) {
      res.status(500).send(err)
    } else {
      food.name = req.body.name || food.name
      food.price = req.body.price || food.price

      food.save((err, food) => {
        err ? res.status(500).send(err) : res.send(food)
      })
    }
  })
}

var remove = function (req,res) {
  Food.findByIdAndRemove(req.params.id, (err, food) => {
    if (err) res.status(500).send(err);
    var response = {
        message: "Food successfully deleted",
        id: food._id
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
