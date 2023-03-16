'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Progress extends Model {
    static associate(models) {
      Progress.belongsTo(models.Profile, { foreignKey: 'profile' })
      Progress.belongsTo(models.Level, { foreignKey: 'level' })
      Progress.belongsTo(models.World, {as: 'worlds', foreignKey: 'world'})
    }
  }
  Progress.init({
    profile: DataTypes.INTEGER,
    level: DataTypes.INTEGER,
    world: DataTypes.INTEGER,
    levelCompleted: DataTypes.BOOLEAN,
    exercisesCompleted: DataTypes.INTEGER,
    stars: DataTypes.INTEGER,
    xp: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Progress',
  });
  return Progress;
};