var express = require('express');
var router = express.Router();
let Item = require('../controllers/item')

/* GET users listing. */
router.get('/', Item.read);
router.post('/', Item.create)
router.put('/:id', Item.update)
router.delete('/:id', Item.deleteItem)
router.get('/search/:query', Item.search)

module.exports = router;
