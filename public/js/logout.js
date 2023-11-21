const logout = async (e) => {
	e.preventDefault()

	// Send a POST request to the server-side logout route
	const response = await fetch('/api/users/logout', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' }
	})
	// Check if the server responds with a successful status
	if (response.ok) {
		// Redirect the user to the homepage after successful logout
		document.location.replace('/')
		// Display a logout confirmation alert
		alert('You have been logged out.')
	} else {
		// Display an alert if the logout process fails
		alert('Failed to log out.')
	}
}

// Add an event listener to the logout button, triggering the logout function on click
document.querySelector('#logout').addEventListener('click', logout)
