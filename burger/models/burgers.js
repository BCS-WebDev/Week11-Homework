'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Burgers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Burgers.init({
    burger_name: DataTypes.STRING,
    devoured: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Burgers',
  });
  return Burgers;
};