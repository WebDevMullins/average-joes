const router = require('express').Router()
const { User, Member } = require('../../models')

router.post('/signup', async (req, res) => {
	try {
		const dbUserData = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		})

		req.session.user_email = req.body.email
		req.session.logged_in = true

		req.session.save(() => {
			res.status(200).json(dbUserData)
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: 'cannot create user at this time' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const userData = await User.findByPk(req.body.email)
		if (!userData) {
			res.status(400).json({ message: 'Incorrect email or password, please try again' })
			return
		}

		const validPassword = await userData.checkPassword(req.body.password)

		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect email or password, please try again' })
			return
		}

		const member = await Member.findByPk(req.body.email)

		if (member && member.membershipStatus) {
			req.session.is_member = true
		}
		console.log(req.session.is_member)

		req.session.user_email = userData.email
		req.session.logged_in = true

		req.session.save(() => {
			res.json({ user: userData, message: 'You are now logged in!' })
		})
	} catch (err) {
		res.status(400).json(err)
	}
})

router.post('/logout', (req, res) => {
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end()
		})
	} else {
		res.status(404).end()
	}
})

router.put('/', async (req, res) => {
	try {
		const userData = await User.update(
			{ plan_id: req.body.plan_id, tier_id: req.body.tier_id },
			{ where: { id: req.session.user_id } }
		)

		if (!userData) {
			res.status(404).json({ message: 'No user found with this id' })
			return
		}

		res.status(200).json(userData)
	} catch (err) {
		res.status(500).json(err)
	}
})

module.exports = router
