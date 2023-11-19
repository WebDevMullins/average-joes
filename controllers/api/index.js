const router = require('express').Router();
const userRoutes = require('./userRoutes');
const membershipRoutes = require('./membershipRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/users', userRoutes);
router.use('/membership', membershipRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;
