const router = require('express').Router();
const controllers = require('../controllers');
router.get('/', controllers.fits.index);

router.get('/:id', controllers.fits.show);

router.post('/', controllers.fits.create);

router.put('/:id', controllers.fits.update);

router.delete('/:id', controllers.fits.destroy);



module.exports = router;
