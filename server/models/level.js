'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Level extends Model {
    static associate(models) {
      Level.belongsTo(models.World, {
        foreignKey: 'world'
      }),
      Level.hasMany(models.Progress, {
        foreignKey: "level",
        as: 'progressRecords'
      })
    }
  }
  Level.init({
    levelNumber: DataTypes.INTEGER,
    world: DataTypes.INTEGER,
    difficulty: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Level',
  });
  return Level;
};