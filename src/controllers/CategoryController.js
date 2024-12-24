const Controller = require('./Controller.js');
const CategoryServices = require('../services/CategoryServices.js');

const categoryServices = new CategoryServices();
class CategoryControllers extends Controller {
  constructor() {
    super(categoryServices);
  }
}

module.exports = CategoryControllers;
