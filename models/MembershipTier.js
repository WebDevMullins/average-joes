const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class MembershipTier extends Model {}

MembershipTier.init(
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
		},
		trainer_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'trainer',
				key: 'id'
			}
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
