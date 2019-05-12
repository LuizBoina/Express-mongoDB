const express = require('express');
const router = express.Router();
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middleware/auth');

router.post('/', auth, stuffCtrl.createThing);
router.get('/:id', auth, stuffCtrl.getThing);
router.put('/:id', auth, stuffCtrl.changeThing);
router.delete('/:id', auth, stuffCtrl.delThing);
router.get('/', auth, stuffCtrl.getThings);

module.exports = router;
