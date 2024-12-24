class Controller {
  constructor(entityService) {
    this.entityService = entityService;
  }

  async getAll(req, res) {
    try {
      const registrationList = await this.entityService.getAllRegisters();
      return res.status(200).json(registrationList);
    } catch (error) {
      console.log('erro');
    }
  }
}

module.exports = Controller;
