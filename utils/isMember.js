const Member = require('../models')

const checkMembership = async (req, res, next) => {
	try {
		const memberId = req.session.user_email

		const member = await Member.findByPk(memberId)

		if (member && memberId.membershipStatus) {
			req.session.is_member = true
			next()
		} else {
			res.status(403).send('Access Forbidden: You need an active membership.')
		}
	} catch (err) {
		console.error('Error checking membership: ', err)
		res.status(500).send(err)
	}
}

module.exports = checkMembership
