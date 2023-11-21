const signupFormHandler = async (event) => {
	event.preventDefault()

	// Get values from the signup form input fields
	const name = document.querySelector('#name').value.trim()
	const email = document.querySelector('#email').value.trim()
	const password = document.querySelector('#password').value.trim()

	// Check if name, email, and password are provided
	if (name && email && password) {
		const response = await fetch('/api/users/signup', {
			method: 'POST',
			body: JSON.stringify({ name, email, password }),
			headers: { 'Content-Type': 'application/json' }
		})

		// Check if the server responds with a successful status
		if (response.ok) {
			// Redirect the user to the homepage after successful signup
			document.location.replace('/')
		} else {
			// Display an alert if signup fails
			alert('Failed to sign up.')
		}
	}
}

// Add an event listener to the signup form, triggering the signupFormHandler function on form submission
document.querySelector('.signup-form').addEventListener('submit', signupFormHandler)
