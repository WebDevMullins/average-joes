const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class Schedule extends Model {}

Schedule.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		day: {
			type: DataTypes.STRING,
			allowNull: false
		},
		time: {
			type: DataTypes.STRING,
			allowNull: false
		},
        trainer_id: {
            type: DataTypes.INTEGER,
            allowNull:true
        }
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'schedule'
	}
)

module.exports = Schedule
