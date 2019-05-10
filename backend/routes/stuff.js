const express = require('express');
const router = express.Router();
const Thing = require('../models/thing');
const stuffCtrl = require('../controllers/stuff');
module.exports = router;

router.post('/', stuffCtrl.createThing);
  
  router.get('/:id', stuffCtrl.getThing);
  
router.put('/:id', stuffCtrl.changeThing);
  
router.delete('/:id', stuffCtrl.delThing);
  
router.get('/', stuffCtrl.getThings);
  