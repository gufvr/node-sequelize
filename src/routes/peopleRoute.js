/* eslint-disable linebreak-style */
const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');

const router = Router();

router.get('/people', PersonController.getAll);

module.exports = router;
