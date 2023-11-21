const router = require('express').Router()
const { MembershipPlan, MembershipTier, Trainer, Member, User, Schedule } = require('../models')
const withAuth = require('../utils/auth')

// Route: Render the homepage
router.get('/', async (req, res) => {
	try {
		res.render('homepage', {
			logged_in: req.session.logged_in,
			is_member: req.session.is_member
		})
	} catch (err) {
		res.status(500).json(err)
	}
})

// Route: Render the signup page
router.get('/signup', async (req, res) => {
	try {
		res.render('signup', {
			logged_in: req.session.logged_in
		})
	} catch (error) {
		res.status(500).json({ message: 'there was an error' })
	}
})

// Render the member profile page (requires auth)
router.get('/profile', withAuth, async (req, res) => {
	try {
		// Find the logged in user based on user email
		const userData = await Member.findByPk(req.session.user_email, {
			attributes: { exclude: ['id'] },
			include: [
				{ model: User, attributes: ['name'] },
				{ model: MembershipPlan, attributes: ['name'], as: 'plan' },
				{
					model: MembershipTier,
					attributes: { exclude: ['id', 'trainer_id'] },
					include: [{ model: Trainer, attributes: { exclude: ['id'] } }],
					as: 'tier'
				}
			]
		})

		const user = userData.get({ plain: true })
		res.render('profile', {
			...user,
			logged_in: req.session.logged_in,
			is_member: req.session.is_member
		})
	} catch (err) {
		res.status(500).json(err)
	}
})

// Route: Render the login page
router.get('/login', (req, res) => {
	// If the user is already logged in, redirect the request to another route
	if (req.session.logged_in) {
		res.redirect('/')
		return
	}

	res.render('login')
})

// Route: Render the pricing page
router.get('/pricing', async (req, res) => {
	try {
		// Get all membership tiers with trainers
		const tierData = await MembershipTier.findAll({
			include: [
				{
					model: Trainer
				}
			]
		})
		const tier = tierData.map((tier) => tier.get({ plain: true }))
		console.log(req.session.is_member)
		res.render('pricing', {
			tier,
			logged_in: req.session.logged_in,
			is_member: req.session.is_member
		})
	} catch (err) {
		res.status(400).json(err)
	}
})

// Route: Render the membership page (requires auth)
router.get('/membership', withAuth, async (req, res) => {
	try {
		// Get all membership plans
		const planData = await MembershipPlan.findAll({
			attributes: ['id', 'name', 'duration']
		})
		// Get all tiers
		const tierData = await MembershipTier.findAll({
			attributes: ['id', 'name']
		})

		// Serialize data
		const plan = planData.map((plan) => plan.get({ plain: true }))

		const tier = tierData.map((tier) => tier.get({ plain: true }))
		// Render template with membership data
		res.render('membership', { plan, tier, logged_in: req.session.logged_in, is_member: req.session.is_member })
	} catch (err) {
		// Handle server error
		res.status(500).json(err)
	}
})

// Route: Render the schedule page
router.get('/schedule', async (req, res) => {
	try {
		// Get all schedules with trainers
		const scheduleData = await Schedule.findAll({
			include: [
				{
					model: Trainer
				}
			]
		})
		const schedule = scheduleData.map((tier) => tier.get({ plain: true }))
		res.render('schedule', { schedule, logged_in: req.session.logged_in, is_member: req.session.is_member })
	} catch (err) {
		res.status(400).json(err)
	}
})

module.exports = router
