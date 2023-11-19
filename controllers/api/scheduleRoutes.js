const router = require('express').Router()
const { Schedule, Trainer } = require('../../models')

router.get('/', async (req, res) => {
    try {
        const scheduleData = await Schedule.findAll({
            include: [
                {
                    model: Trainer
                }
            ]
        })
        const schedule = scheduleData.map((tier) => tier.get({ plain: true }))
        res.render('schedule', { schedule })
        // res.status(200).json(scheduleData)
    } catch(err) {
        res.status(400).json(err)
    }
})

module.exports = router