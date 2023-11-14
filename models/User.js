const { Model, DataTypes } = require('sequelize')
const sequelize = require('../config/connection')

class User extends Model {}

User.init(
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
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				len: [8]
			}
		},
		membership_tier_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			// defaultValue: 'Basic',
			// validate: {
			//   isIn: [['basic', '24_hour', 'all_access']]
			// },
			reference: {
				model: 'membership_tier',
				key: 'id'
			}
		  },
		  membership_plan_id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: 'membership_plan',
				key: 'id'
			}
		  }
	},
	{
	  sequelize,
	  timestamps: false,
	  freezeTableName: true,
	  underscored: true,
	  modelName: 'user'
	}
  );

module.exports = User
