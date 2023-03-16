'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
  class Profile extends Model {
    static associate(models) {
      Profile.belongsTo(models.User, { foreignKey: 'userId' }),
      Profile.hasMany(models.Progress, {
        foreignKey: "profile",
        as: 'progressRecords'
      })
    }
  }

  Profile.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userName: DataTypes.STRING,
    gradeLevel: DataTypes.INTEGER,
    photo: {
      type: DataTypes.STRING,
      validate: {
        min: 0,
        max: 6
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    modelName: 'Profile',
  })
  return Profile
}
