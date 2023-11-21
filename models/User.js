const { Model, DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const sequelize = require('../config/connection')

class User extends Model {
	// Method to check if the provided password matches the hashed password
	checkPassword(loginPw) {
		return bcrypt.compareSync(loginPw, this.password)
	}
}

// Define the model
User.init(
	{
		// Define columns with their data types, constraints, and validations
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
			primaryKey: true,
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
		member_email: {
			type: DataTypes.STRING,
			references: {
				model: 'member',
				key: 'email'
			}
		}
	},
	{
		// Define hooks for handling password hashing before creating/updating records
		hooks: {
			beforeCreate: async (newUserData) => {
				newUserData.password = await bcrypt.hash(newUserData.password, 10)
				return newUserData
			},
			beforeUpdate: async (newUserData) => {
				newUserData.password = await bcrypt.hash(newUserData.password, 10)
				return newUserData
			}
		},
		sequelize,
		timestamps: false,
		freezeTableName: true,
		underscored: true,
		modelName: 'user'
	}
)

module.exports = User
