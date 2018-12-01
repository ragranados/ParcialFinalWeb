const express = require('express');
const router = express.Router();
const BusController= require('../controllers/BusController');

router.post('/api/rutasbuses',BusController.create);