const Controller = require('./Controller.js');
const PersonServices = require('../services/PersonServices.js');

const personServices = new PersonServices();
class PersonController extends Controller {
  constructor() {
    super(personServices);
  }

  async getRecords(req, res) {
    const { studantId } = req.params;
    try {
      const recordsList = await PersonServices.getRecordByStudant(Number(studantId));
      return res.status(200).json(recordsList);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = PersonController;
