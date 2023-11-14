const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class MembershipPlan extends Model {}

MembershipPlan.init(
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
