const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');

const personController = new PersonController();

const router = Router();

router.get('/people', (req, res) => personController.getAll(req, res));

module.exports = router;
