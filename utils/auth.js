const withAuth = (req, res, next) => {
	// If user is not logged in, redirect to the login route
	if (!req.session.loggedIn) {
		res.redirect('/login')
	} else {
		next()
	}
}

module.exports = withAuth
