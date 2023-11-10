const { User } = require('../models')

const userData = [
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: 'password123'
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: 'securepass'
	},
	{
		name: 'Bob Smith',
		email: 'bob@example.com',
		password: 'bobspassword'
	},
	{
		name: 'Alice Johnson',
		email: 'alice@example.com',
		password: 'alicepass'
	},
	{
		name: 'Charlie Brown',
		email: 'charlie@example.com',
		password: 'charliepass'
	}
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
