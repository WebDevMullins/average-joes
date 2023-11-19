const router = require('express').Router();
const userRoutes = require('./userRoutes');
const membershipRoutes = require('./membershipRoutes');

router.use('/users', userRoutes);
router.use('/membership', membershipRoutes);

module.exports = router;
