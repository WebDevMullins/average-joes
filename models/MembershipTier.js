const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class MembershipTier extends Model {}

MembershipTier.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		monthlyFee: {
			type: DataTypes.FLOAT,
			allowNull: false,
			validate: {
				isDecimal: true,
				len: [4, 4]
			}
		},
		benefits: {
			type: DataTypes.STRING,
			allowNull: false
		}
	},
	{
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'membership_tier'
	}
)

module.exports = MembershipTier
