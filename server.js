const path = require('path')
const express = require('express')
const session = require('express-session')
const exphbs = require('express-handlebars')
const routes = require('./controllers')
const helpers = require('./utils/helpers')

// Import Sequelize and create a connection instance
const sequelize = require('./config/connection')
const SequelizeStore = require('connect-session-sequelize')(session.Store)

// Create an Express application
const app = express()
const PORT = process.env.PORT || 3001

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({ helpers })

// Session config
const sess = {
	secret: process.env.SESSION_SECRET,
	cookie: {
		maxAge: 300000,
		httpOnly: true,
		secure: false,
		sameSite: 'strict'
	},
	resave: false,
	saveUninitialized: true,
	store: new SequelizeStore({
		db: sequelize
	})
}

// Use Express session middleware with the configured session options
app.use(session(sess))

// Set up the Handlebars engine for rendering views
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

// Middleware to parse JSON and URL-encoded data
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')))

// Use the defined routes for the application
app.use(routes)

// Sync Sequelize models with the database and start the Express server
sequelize.sync({ force: false }).then(() => {
	app.listen(PORT, () => console.log('Now listening'))
})
