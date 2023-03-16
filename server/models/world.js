'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class World extends Model {
    static associate(models) {
      World.hasMany(models.Level, {
        foreignKey: "world",
        as: 'Levels'
      })
    }
  }
  World.init({
    worldNumber: DataTypes.INTEGER,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'World',
  });
  return World;
};