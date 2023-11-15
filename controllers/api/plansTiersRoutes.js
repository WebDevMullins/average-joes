const router = require('express').Router();
const { MembershipTier, MembershipPlan, Trainer } = require('../../models');

router.get('/tiers', async (req, res) => {
    try {
        const tierData = await MembershipTier.findAll({
            include: [{
                model: Trainer
            }]
        });
        const tier = tierData.map((tier) => tier.get({ plain: true }));
        console.log(tier);
        console.log('---------------------');
        res.render('tier', { tier} );
        // res.status(200).json(tierData);
    } catch(err) {
        res.status(400).json(err);
    };
});

router.get('/plans', async (req, res) => {
    try {
        const planData = await MembershipPlan.findAll();
        res.status(200).json(planData);
    } catch(err) {
        res.status(400).json(err);
    };
});

module.exports = router;