const router = require('express').Router()
const { User } = require('../../models')

router.post('/', async (req, res) => {
	try {
		const userData = await User.create(req.body)

		req.session.user_id = userData.id
		req.session.logged_in = true

		req.session.save(() => {
			res.status(200).json(userData)
		})
	} catch (err) {
		res.status(400).json(err)
	}
})
///
router.post("/signup", async (req, res) => {
  try {
    const dbUserData = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      membership_tier_id: 4,
      membership_plan_id: 4,
    });

		req.session.save(() => {
			req.session.loggedIn = true

			res.status(200).json(dbUserData)
		})
	} catch (err) {
		console.log(err)
		res.status(500).json({ message: 'cannot create user at this time' })
	}
})

router.post('/login', async (req, res) => {
	try {
		const userData = await User.findOne({ where: { email: req.body.email } })
		if (!userData) {
			res.status(400).json({ message: 'Incorrect email or password, please try again' })
			return
		}

		const validPassword = await userData.checkPassword(req.body.password)
		console.log(validPassword)
		if (!validPassword) {
			res.status(400).json({ message: 'Incorrect email or password, please try again' })
			return
		}
		req.session.user_id = userData.id
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
			{ membership_plan_id: req.body.plan_id, membership_tier_id: req.body.tier_id },
			{ where: { id: req.session.id } }
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
