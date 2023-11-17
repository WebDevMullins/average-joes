const { MembershipTier } = require('../models');

const data = [
  {
    name: "Bronze",
    monthlyFee: 40,
    benefits: "2 Classes per week",
    trainer_id: 2,
  },
  {
    name: "Silver",
    monthlyFee: 60,
    benefits: "4 Classes per week",
    trainer_id: 1,
  },
  {
    name: "Gold",
    monthlyFee: 100,
    benefits: "Unlimited Classes",
    trainer_id: 3,
  }
];

const seedTier = () => MembershipTier.bulkCreate(data)

module.exports = seedTier
