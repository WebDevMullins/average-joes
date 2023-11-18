const router = require('express').Router()
const { MembershipPlan, Member } = require('../../models')

router.post('/', async (req, res) => {
	// console.log(membershipStatus)
	try {
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

		req.session.is_member = true
		req.session.save(() => {
			res.status(200).json(memberData)
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: 'cannot create user at this time' })
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

module.exports = router
