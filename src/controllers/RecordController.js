const Controller = require('./Controller.js');
const RecordServices = require('../services/RecordServices.js');

const recordServices = new RecordServices();
class RecordController extends Controller {
  constructor() {
    super(recordServices);
  }
}

module.exports = RecordController;
