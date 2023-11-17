const { Trainer } = require('../models');

const trainerData = [
  {
    f_name: "Chris",
    l_name: "Bumstead",
    specialty_classes:
      "High-Intensity Interval Training (HIIT), Strength Conditioning",
    certifications:
      "Certified Strength and Conditioning Specialist (CSCS) 3 time Mr Olympia",
  },
  {
    f_name: "AmyJo",
    l_name: "Johnson",
    specialty_classes:
      "High-Intensity Interval Training, Strength Conditioning",
    certifications: "Certified Strength and Conditioning Specialist",
  },
  {
    f_name: "Tom",
    l_name: "Brady",
    specialty_classes: "CrossFit, Bootcamp Workouts, Nutritional Coaching",
    certifications:
      "CrossFit Level 99.5 Trainer, Certified Nutrition Specialist (CNS)",
  },
];

const seedTrainer = () => Trainer.bulkCreate(trainerData);

module.exports = seedTrainer;
