var express = require('express');
var restaurantsCtrl = require('../controllers/restaurantsCtrl')
var router = express.Router();

router.get('/', restaurantsCtrl.getAll)
router.post('/', restaurantsCtrl.create)
router.get('/:id', restaurantsCtrl.getOne)
router.put('/:id', restaurantsCtrl.update)
router.delete('/:id', restaurantsCtrl.remove)

module.exports = router;
