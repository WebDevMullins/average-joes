const User = require('./User')
const Trainer = require('./Trainer')
const MembershipTier = require('./MembershipTier')
const MembershipPlan = require('./MembershipPlan')

MembershipTier.belongsTo(Trainer, {
	foreignKey: 'trainer_id'
})

Trainer.hasOne(MembershipTier, {
	foreignKey: 'trainer_id'
})

User.belongsTo(MembershipPlan, {
	foreignKey: 'plan_id',
	as: 'plan'
})

MembershipPlan.hasOne(User, {
	foreignKey: 'plan_id',
	as: 'plan'
})

User.belongsTo(MembershipTier, {
	foreignKey: 'tier_id',
	as: 'tier'
})

MembershipTier.hasOne(User, {
	foreignKey: 'tier_id',
	as: 'tier'
})

module.exports = { User, Trainer, MembershipTier, MembershipPlan }
