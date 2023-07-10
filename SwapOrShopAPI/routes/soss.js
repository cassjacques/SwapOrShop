const router = require('express').Router();
const controllers = require('../controllers');

router.get('/photo/:id', controllers.soss.photo);

router.get('/', controllers.soss.index);

router.get('/:id', controllers.soss.show);

router.post('/', controllers.soss.create);

router.put('/:id', controllers.soss.update);

router.delete('/:id', controllers.soss.destroy);

module.exports = router;
