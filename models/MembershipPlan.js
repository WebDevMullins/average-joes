const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class MembershipPlan extends Model {}

// Define the model
MembershipPlan.init(
	{
		// Define columns with their data types, constraints, and validations
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [2, 30]
			}
		},
		duration: {
			type: DataTypes.INTEGER,
			allowNull: false
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'membership_plan'
	}
)

module.exports = MembershipPlan
