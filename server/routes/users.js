var express = require('express');
var router = express.Router();
let User = require('../controllers/user.js')

/* GET users listing. */
router.post('/', User.create)
router.get('/', User.read)
router.put('/:id', User.update)
router.delete('/:id', User.deleteUser)

module.exports = router;
