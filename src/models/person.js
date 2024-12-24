'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Person extends Model {
    static associate(models) {
      Person.hasMany(models.Course, {
        foreignKey: 'teacher_id',
      });
      Person.hasMany(models.Record, {
        foreignKey: 'studant_id',
        as: 'classesEnrolled',
      });
    }
  }
  Person.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      cpf: DataTypes.STRING,
      active: DataTypes.BOOLEAN,
      role: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: 'Person',
      tableName: 'people',
    }
  );
  return Person;
};
