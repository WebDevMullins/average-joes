const router = require('express').Router()
const { MembershipPlan, Member } = require('../../models')

// Route: Create a new member
router.post('/', async (req, res) => {
	try {
		// Create a new member with data from the request body
		const memberData = await Member.create({
			f_name: req.body.fName,
			l_name: req.body.lName,
			phone: req.body.phone,
			dob: req.body.dob,
			address: req.body.address,
			city: req.body.city,
			state: req.body.state,
			email: req.session.user_email,
			membershipStatus: req.body.membershipStatus,
			plan_id: req.body.planId,
			tier_id: req.body.tierId
		})
		// Update session info to indicate user is now a member
		req.session.is_member = true
		req.session.save(() => {
			res.status(200).json(memberData)
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: 'cannot create user at this time' })
	}
})

// Route: Get all membership plans
router.get('/plans', async (req, res) => {
	try {
		// Get all membership plans
		const planData = await MembershipPlan.findAll()
		res.status(200).json(planData)
	} catch (err) {
		res.status(400).json(err)
	}
})

module.exports = router
