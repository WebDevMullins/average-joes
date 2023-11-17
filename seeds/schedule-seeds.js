const { Schedule } = require('../models');

const data = [
    {
        day: 'Monday',
        time: '5:30am',
        trainer_id: 1
    },
    {
        day: 'Monday',
        time: '6:30am',
        trainer_id: 1
    },
    {
        day: 'Monday',
        time: '8:30am',
        trainer_id: 3
    },
    {
        day: 'Monday',
        time: '12:00pm',
        trainer_id: 3
    },
    {
        day: 'Monday',
        time: '4:30pm',
        trainer_id: 3
    },
    {
        day: 'Monday',
        time: '5:30pm',
        trainer_id: 2
    },
    {
        day: 'Monday',
        time: '6:30pm',
        trainer_id: 2
    },
    {
        day: 'Tuesday',
        time: '5:30am',
        trainer_id: 1
    },
    {
        day: 'Tuesday',
        time: '6:30am',
        trainer_id: 1
    },
    {
        day: 'Tuesday',
        time: '8:30am',
        trainer_id: 3
    },
    {
        day: 'Tuesday',
        time: '12:00pm',
        trainer_id: 3
    },
    {
        day: 'Tuesday',
        time: '4:30pm',
        trainer_id: 3
    },
    {
        day: 'Tuesday',
        time: '5:30pm',
        trainer_id: 2
    },
    {
        day: 'Tuesday',
        time: '6:30pm',
        trainer_id: 2
    },
    {
        day: 'Wednesday',
        time: '5:30am',
        trainer_id: 2
    },
    {
        day: 'Wednesday',
        time: '6:30am',
        trainer_id: 2
    },
    {
        day: 'Wednesday',
        time: '8:30am',
        trainer_id: 3
    },
    {
        day: 'Wednesday',
        time: '12:00pm',
        trainer_id: 3
    },
    {
        day: 'Wednesday',
        time: '4:30pm',
        trainer_id: 3
    },
    {
        day: 'Wednesday',
        time: '5:30pm',
        trainer_id: 1
    },
    {
        day: 'Wednesday',
        time: '6:30pm',
        trainer_id: 1
    },
    {
        day: 'Thursday',
        time: '5:30am',
        trainer_id: 1
    },
    {
        day: 'Thursday',
        time: '6:30am',
        trainer_id: 1
    },
    {
        day: 'Thursday',
        time: '8:30am',
        trainer_id: 3
    },
    {
        day: 'Thursday',
        time: '12:00pm',
        trainer_id: 3
    },
    {
        day: 'Thursday',
        time: '4:30pm',
        trainer_id: 3
    },
    {
        day: 'Thursday',
        time: '5:30pm',
        trainer_id: 2
    },
    {
        day: 'Thursday',
        time: '6:30pm',
        trainer_id: 2
    },
    {
        day: 'Friday',
        time: '5:30am',
        trainer_id: 1
    },
    {
        day: 'Friday',
        time: '6:30am',
        trainer_id: 1
    },
    {
        day: 'Friday',
        time: '8:30am',
        trainer_id: 3
    },
    {
        day: 'Friday',
        time: '12:00pm',
        trainer_id: 3
    },
    {
        day: 'Friday',
        time: '4:30pm',
        trainer_id: 3
    },
    {
        day: 'Friday',
        time: '5:30pm',
        trainer_id: 2
    }
];

const seedSchedule = () => Schedule.bulkCreate(data);

module.exports = seedSchedule;