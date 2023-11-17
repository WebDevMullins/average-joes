const router = require('express').Router()
const { Op } = require('sequelize')
const { MembershipTier, MembershipPlan, Trainer, User } = require('../../models')

router.get('/tiers', async (req, res) => {
	try {
		const tierData = await MembershipTier.findAll({
			include: [
				{
					model: Trainer
				}
			]
		})
		const tier = tierData.map((tier) => tier.get({ plain: true }))
		res.render('tier', { tier })
		// res.status(200).json(tierData);
	} catch (err) {
		res.status(400).json(err)
	}
})

router.get('/plans', async (req, res) => {
	try {
		const planData = await MembershipPlan.findAll()
		res.status(200).json(planData)
	} catch (err) {
		res.status(400).json(err)
	}
})

router.get('/', async (req, res) => {
	try {
		// Get all membership plans and JOIN with tiers
		const membershipData = await MembershipPlan.findAll({
			attributes: ['name', 'duration'],
			where: {
				name: { [Op.not]: 'New Member' }
			},
			// include: [{ MembershipTier, attributes: ['name'] }]
		})
		const membershipTierData = await MembershipTier.findAll({
			attributes: ['name'],
						// include: [{ MembershipTier, attributes: ['name'] }]
		})


		// Serialize data
		const membership = membershipData.map((membership) => membership.get({ plain: true }))
		const membershipTier = membershipTierData.map((membership) => membership.get({ plain: true }))
		// Render template with membership data
		res.render('membership', { membership, membershipTier })
		// res.json(membership)
	} catch (err) {
		// Handle server error
		res.status(500).json(err)
	}
})

module.exports = router
