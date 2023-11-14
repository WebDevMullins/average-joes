const { User } = require('../models')

const userData = [
	{
		name: 'John Doe',
		email: 'john@example.com',
		password: 'password123',
		membership_tier_id: 1,
		membership_plan_id: 1
	},
	{
		name: 'Jane Doe',
		email: 'jane@example.com',
		password: 'securepass',
		membership_tier_id: 1,
		membership_plan_id: 1
	},
	{
		name: 'Bob Smith',
		email: 'bob@example.com',
		password: 'bobspassword',
		membership_tier_id: 1,
		membership_plan_id: 1
	},
	{
		name: 'Alice Johnson',
		email: 'alice@example.com',
		password: 'alicepass',
		membership_tier_id: 1,
		membership_plan_id: 1
	},
	{
		name: 'Charlie Brown',
		email: 'charlie@example.com',
		password: 'charliepass',
		membership_tier_id: 1,
		membership_plan_id: 1
	}
]

const seedUsers = () => User.bulkCreate(userData)

module.exports = seedUsers
