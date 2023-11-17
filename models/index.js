const User = require('./User')
const Member = require('./Member')
const Trainer = require('./Trainer')
const MembershipTier = require('./MembershipTier')
const MembershipPlan = require('./MembershipPlan')

MembershipTier.belongsTo(Trainer, {
	foreignKey: 'trainer_id'
})

Trainer.hasOne(MembershipTier, {
	foreignKey: 'trainer_id'
})

Member.belongsTo(MembershipPlan, {
	foreignKey: 'plan_id',
	as: 'plan'
})

MembershipPlan.hasOne(Member, {
	foreignKey: 'plan_id',
	as: 'plan'
})

Member.belongsTo(MembershipTier, {
	foreignKey: 'tier_id',
	as: 'tier'
})

MembershipTier.hasOne(Member, {
	foreignKey: 'tier_id',
	as: 'tier'
})

module.exports = { User, Trainer, Member, MembershipTier, MembershipPlan }
