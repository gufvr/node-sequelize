'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Record extends Model {
    static associate(models) {
      Record.belongsTo(models.Person, {
        foreignKey: 'studant_id',
      });
      Record.belongsTo(models.Course, {
        foreignKey: 'course_id',
      });
    }
  }
  Record.init(
    {
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Record',
      tableName: 'records',
    }
  );
  return Record;
};
