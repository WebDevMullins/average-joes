const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection'); 

class Staff extends Model {}

Staff.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    role: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    specialty_classes: {
      type: DataTypes.STRING,
    },
    certifications: {
      type: DataTypes.STRING,
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'staff'
  }
);

module.exports = Staff;
