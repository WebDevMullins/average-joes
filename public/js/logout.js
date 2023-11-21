const logout = async (e) => {
	e.preventDefault()

	const response = await fetch('/api/users/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	})

	if (response.ok) {
		document.location.replace('/')
		alert('You have been logged out.')
	} else {
		alert('Failed to log out.')
	}
}

<<<<<<< HEAD
document.querySelector("#logout").addEventListener("click", logout);
=======
document.querySelector('#logout').addEventListener('click', logout)
>>>>>>> fc510bdb4eebc4ef059fc1311542344d2bd52d8a
