class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const recordList = await this.entityService.getAllRecords();
      return res.status(200).json(recordList);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async getOneById(req, res) {
    const { id } = req.params;
    try {
      const oneRecord = await this.entityService.getOneById(Number(id));
      return res.status(200).json(oneRecord);
    } catch (error) {
      console.log(error);
    }
  }

  async createNew(req, res) {
    const dataForCreation = req.body;
    try {
      const newRecordCreated = await this.entityService.createRecord(
        dataForCreation
      );
      return res.status(200).json(newRecordCreated);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async update(req, res) {
    const { id } = req.params;
    const updatedData = req.body;

    try {
      const hasUpdated = await this.entityService.updateRecord(
        updatedData,
        Number(id)
      );
      if (!hasUpdated) {
        return res.status(400).json({ message: 'record was not updated' });
      }
      return res.status(200).json({ message: `id ${id} updated` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  async delete(req, res) {
    const { id } = req.params;
    try {
      await this.entityService.deleteRecord(Number(id));
      return res.status(200).json({ message: `id ${id} deleted` });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
}

module.exports = Controller;
