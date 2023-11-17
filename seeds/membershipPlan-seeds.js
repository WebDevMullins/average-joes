const { MembershipPlan } = require('../models')

const planData = [
	{
		name: 'Monthly',
		duration: 1
	},
	{
		name: 'Half Year',
		duration: 6
	},
	{
		name: 'Full Year',
		duration: 12
	}
]

const seedMemberShipPlan = () => MembershipPlan.bulkCreate(planData)

module.exports = seedMemberShipPlan
