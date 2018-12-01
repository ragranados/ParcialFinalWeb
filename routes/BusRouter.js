const express = require('express');
const router = express.Router();
const BusController= require('../controllers/BusController');

router.post('/',BusController.create);

router.get('/:id',BusController.get);

router.get('/',BusController.getAll);

router.put('/:id',BusController.update);

router.delete('/:id',BusController.delete);

module.exports = router;