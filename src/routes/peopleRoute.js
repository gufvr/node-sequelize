const { Router } = require('express');
const PersonController = require('../controllers/PersonController.js');
const RecordController = require('../controllers/RecordController.js');

const personController = new PersonController();
const recordController = new RecordController();

const router = Router();

router.get('/people', (req, res) => personController.getAll(req, res));
router.get('/people/:id', (req, res) => personController.getOneById(req, res));
router.post('/people', (req, res) => personController.createNew(req, res));
router.put('/people/:id', (req, res) => personController.updtate(req, res));
router.delete('/people/:id', (req, res) => personController.delete(req, res));
router.get('/people/:studantId/records', (req, res) =>
  personController.getRecords(req, res)
);
router.post('/people/:studantId/records', (req, res) =>
  recordController.createNew(req, res)
);

module.exports = router;
