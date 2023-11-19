const User = require('./User')
const Member = require('./Member')
const Trainer = require('./Trainer')
const MembershipTier = require('./MembershipTier')
const MembershipPlan = require('./MembershipPlan')
const Schedule = require('./Schedule')

Member.hasOne(User, {
	foreignKey: 'email'
})
User.belongsTo(Member, {
	foreignKey: 'email'
})

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

Trainer.hasMany(Schedule, {
	foreignKey: 'trainer_id'
})

Schedule.belongsTo(Trainer, {
	foreignKey: 'trainer_id'
})

module.exports = { User, Trainer, Member, MembershipTier, MembershipPlan, Schedule }
