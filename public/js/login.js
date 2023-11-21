const loginFormHandler = async (e) => {
	e.preventDefault()

	// Get the value of the email and password input fields
	const email = document.querySelector('#email').value.trim()
	const password = document.querySelector('#password').value.trim()

	// Check if both email and password are provided
	if (email && password) {
		// Send a POST request toe the server-side login route with user credentials
		const response = await fetch('/api/users/login', {
			method: 'POST',
			body: JSON.stringify({ email, password }),
			headers: { 'Content-Type': 'application/json' }
		})
		// Check if the server responds with a successful status
		if (response.ok) {
			// Redirect user to the homepage after successful login
			document.location.replace('/')
		} else {
			// Display an alert if login credentials are invalid
			alert('Invalid login credentials, please try again.')
		}
	}
}

// Add event listener to the login form, triggering the loginFormHandler function on form submission
document.querySelector('.login-form').addEventListener('submit', loginFormHandler)
