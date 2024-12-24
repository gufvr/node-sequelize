const Services = require('./Services.js');

class PersonServices extends Services {
  constructor() {
    super('Person');
  }

  async getRecordByStudant(id) {
    const studant = await super.getRecordById(id);
    const recordsList = await studant.getEnrolledClasses();

    return recordsList;
  }
}

module.exports = PersonServices;
