const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');
const multer = require('../middleware/multer-config');

router.post('/', auth, multer, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getThing);
router.put('/:id', auth, multer, stuffCtrl.changeThing);
router.delete('/:id', auth, stuffCtrl.delThing);
router.get('/', auth, stuffCtrl.getThings);

module.exports = router;
