class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const recordList = await this.entityService.getAllRecords();
      return res.status(200).json(recordList);
    } catch (error) {
      console.log(error);
    }
  }

  async updtate(req, res) {
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
      console.log(error);
    }
  }
}

module.exports = Controller;
