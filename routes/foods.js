var express = require('express');
var foodsCtrl = require('../controllers/foodsCtrl')
var router = express.Router();

router.get('/', foodsCtrl.getAll)
router.post('/', foodsCtrl.create)
router.get('/:id', foodsCtrl.getOne)
router.put('/:id', foodsCtrl.update)
router.delete('/:id', foodsCtrl.remove)

module.exports = router;
