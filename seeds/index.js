const sequelize = require('../config/connection')
const seedUsers = require('./user-seeds')
const seedTrainers = require('./trainer-seeds');
const seedMemberShipPlan = require('./membershipPlan-seeds');
const seedTier = require('./membershipTier-seeds');

const seedDatabase = async () => {
	await sequelize.sync({ force: true })
	console.log('\n----- DATABASE SYNCED -----\n')

	await seedTrainers()
	console.log('\n----- TRAINERS SEEDED -----\n')

	await seedMemberShipPlan()
	console.log('\n----- PLANS SEEDED -----\n')

	await seedTier()
	console.log('\n----- TIERS SEEDED -----\n')

	await seedUsers()
	console.log('\n----- USERS SEEDED -----\n')

	process.exit(0)
}

seedDatabase()
