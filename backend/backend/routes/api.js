const express = require('express');
const router = express.Router();
const { getData, postData } = require('../controllers/dataController');

// GET data
router.get('/data', getData);

// POST data
router.post('/data', postData);

module.exports = router;
