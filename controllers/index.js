const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./homeRoutes');
const joinRoutes = require('./joinRoutes')

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/join', joinRoutes)

module.exports = router;
