const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Trainer extends Model {}

// Define the model
Trainer.init(
	{
		// Define columns with their data types, constraints, and validations
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		f_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 30]
			}
		},
		l_name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 30]
			}
		},
		specialty_classes: {
			type: DataTypes.STRING,
			allowNull: false
		},
		certifications: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'trainer'
	}
)

module.exports = Trainer
