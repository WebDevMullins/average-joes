const router = require('express').Router()
const userRoutes = require('./userRoutes')
const membershipRoutes = require('./membershipRoutes')

// Use the userRoutes for paths starting with '/users'
router.use('/users', userRoutes)
// Use the membershipRoutes for paths starting with '/membership'
router.use('/membership', membershipRoutes)

module.exports = router
