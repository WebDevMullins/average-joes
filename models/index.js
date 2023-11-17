const User = require('./User')
const Trainer = require('./Trainer')
const MembershipTier = require('./MembershipTier')
const MembershipPlan = require('./MembershipPlan')
const Schedule = require('./Schedule')

MembershipTier.belongsTo(Trainer, {
	foreignKey: 'trainer_id'
})

Trainer.hasOne(MembershipTier, {
	foreignKey: 'trainer_id'
})

Trainer.hasMany(Schedule, {
	foreignKey: 'trainer_id'
})

Schedule.belongsTo(Trainer, {
	foreignKey: 'trainer_id'
})

module.exports = { User, Trainer, MembershipTier, MembershipPlan, Schedule }
