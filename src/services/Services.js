const dataSource = require('../models');

class Services {
  constructor(modelName) {
    this.model = modelName;
  }

  async getAllRecords() {
    return dataSource[this.model].findAll();
  }

  async getRecordById(id) {
    return dataSource[this.model].findByPk(id);
  }

  async createRecord(recordData) {
    return dataSource[this.model].create(recordData);
  }

  async updateRecord(updatedData, id) {
    const listOfUpdatedRecords = dataSource[this.model].update(updatedData, {
      where: {
        id: id,
      },
    });
    if (listOfUpdatedRecords[0] === 0) {
      return false;
    }
    return true;
  }

  async deleteRecord(id) {
    return dataSource[this.model].destroy({ where: { id: id } });
  }
}

module.exports = Services;
