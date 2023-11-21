const router = require('express').Router()

const apiRoutes = require('./api')
const homeRoutes = require('./homeRoutes')

// Define routes for the main app
// Routes under '/' are handled by homeRoutes
router.use('/', homeRoutes)
// Routes under '/api' are handled by apiRoutes
router.use('/api', apiRoutes)

module.exports = router
