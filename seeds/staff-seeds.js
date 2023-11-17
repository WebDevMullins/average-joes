const { Staff } = require('../models'); 

const staffData = [
    {
        name: "Alex Jones",
        role: "Front Desk Clerk",
        specialty_classes: "",
        certifications: ""
    },
    {
        name: "Jack Sparrow",
        role: "Front Desk Clerk",
        specialty_classes: "",
        certifications: ""
    },
    {
        name: "Chris Bumstead",
        role: "Personal Trainer",
        specialty_classes: "High-Intensity Interval Training (HIIT), Strength Conditioning",
        certifications: "Certified Strength and Conditioning Specialist (CSCS) 3 time Mr Olympia"
    },
    {
        name: "Amy Jo Johnson",
        role: "Personal Trainer",
        specialty_classes: "High-Intensity Interval Training, Strength Conditioning",
        certifications: "Certified Strength and Conditioning Specialist"
    },
    {
        name: "Tom Brady",
        role: "Personal Trainer",
        specialty_classes: "CrossFit, Bootcamp Workouts, Nutritional Coaching",
        certifications: "CrossFit Level 99.5 Trainer, Certified Nutrition Specialist (CNS)"
    },
    
];

const seedStaff = () => Staff.bulkCreate(staffData);

module.exports = seedStaff;
