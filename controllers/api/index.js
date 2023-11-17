const router = require('express').Router();
const userRoutes = require('./userRoutes');
const planTierRoutes = require('./plansTiersRoutes');
const scheduleRoutes = require('./scheduleRoutes');

router.use('/users', userRoutes);
router.use('/membership', planTierRoutes);
router.use('/schedule', scheduleRoutes);

module.exports = router;
