const express = require('express');
const { checkMobileLegends, checkFreeFire } = require('../controllers/gameController');

const router = express.Router();

// Mobile Legends endpoint
router.get('/ml', checkMobileLegends);

// Free Fire endpoint  
router.get('/ff', checkFreeFire);

module.exports = router;
