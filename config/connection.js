// Import Sequelize library
const Sequelize = require('sequelize')

// Load environment variables from a .env file
require('dotenv').config()

let sequelize
/// Check if the JAWSDB_URL environment variable is present
if (process.env.JAWSDB_URL) {
	// If JAWSDB_URL is present, create Sequelize instance using the provided URL
	sequelize = new Sequelize(process.env.JAWSDB_URL)
} else {
	// If JAWSDB_URL is not present, create Sequelize instance using individual database connection details
	sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
		host: '127.0.0.1',
		dialect: 'mysql'
	})
}

module.exports = sequelize
