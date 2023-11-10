const sequelize = require('../config/connection')
const seedUsers = require('./user-seeds')

const seedDatabase = async () => {
	await sequelize.sync({ force: true })
	console.log('\n----- DATABASE SYNCED -----\n')

	await seedUsers()
	console.log('\n----- USERS SEEDED -----\n')

	process.exit(0)
}

seedDatabase()
