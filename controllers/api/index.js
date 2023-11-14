const router = require('express').Router();
const userRoutes = require('./userRoutes');
const planTierRoutes = require('./plansTiersRoutes');

router.use('/users', userRoutes);
router.use('/membership', planTierRoutes);

module.exports = router;
