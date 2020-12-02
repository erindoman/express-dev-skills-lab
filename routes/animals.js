var express = require('express');
var router = express.Router();
const animalsCtrl = require('../controllers/animals')

router.get('/', animalsCtrl.index)
router.get('/new', animalsCtrl.new)
router.get('/:id', animalsCtrl.show)
router.post('/', animalsCtrl.create)
router.delete('/:id', animalsCtrl.delete)
router.get('/:id/edit', animalsCtrl.edit)
router.put('/:id', animalsCtrl.update)

module.exports = router;
