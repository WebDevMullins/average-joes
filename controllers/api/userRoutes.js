const router = require('express').Router()
const { User, Member } = require('../../models')

// Route: User signup
router.post('/signup', async (req, res) => {
	try {
		// Create a new user in the db
		const dbUserData = await User.create({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		})
		// Update session info for the logged-in user
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

// Route: User login
router.post('/login', async (req, res) => {
	try {
		// Find user based on the provided email
		const userData = await User.findByPk(req.body.email)
		if (!userData) {
			res.status(400).json({ message: 'Incorrect email or password, please try again' })
			return
		}
		// Check if the provided password is valid
		const validPassword = await userData.checkPassword(req.body.password)

		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect email or password, please try again' })
			return
		}
		// Check if user is also a member and update session accordingly
		const member = await Member.findByPk(req.body.email)
		if (member && member.membershipStatus) {
			req.session.is_member = true
		}
		// Update session info for the logged-in user
		req.session.user_email = userData.email
		req.session.logged_in = true

		req.session.save(() => {
			res.json({ user: userData, message: 'You are now logged in!' })
		})
	} catch (err) {
		res.status(400).json(err)
	}
})

// Route: User logout
router.post('/logout', (req, res) => {
	// If logged in, destroy the session
	if (req.session.logged_in) {
		req.session.destroy(() => {
			res.status(204).end()
		})
	} else {
		res.status(404).end()
	}
})

module.exports = router
