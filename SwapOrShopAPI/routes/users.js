const router = require('express').Router();
const usersCtrl = require('../controllers/usersController');
const auth = require('../middleware/auth');

router.post('/', usersCtrl.create);

router.get('/profile', auth, usersCtrl.getProfile);

module.exports = router;