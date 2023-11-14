const router = require("express").Router();
const { Project, User } = require("../models");
const withAuth = require("../utils/auth");

router.get('/', async (req, res) => {
    try {
        res.render('join', {
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json({message: 'there was an error'})
    }
})

module.exports = router
