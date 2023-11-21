const membershipFormHandler = async (event) => {
	event.preventDefault()

	// Get values from the membership form input fields
	const fName = document.getElementById('f_name').value.trim()
	const lName = document.getElementById('l_name').value.trim()
	const phone = document.getElementById('phone').value.trim()
	const dob = document.getElementById('dob').value.trim()
	const address = document.getElementById('address').value.trim()
	const city = document.getElementById('city').value.trim()
	const state = document.getElementById('state').value.trim()
	const planId = document.getElementById('planId').value.trim()
	const tierId = document.getElementById('tierId').value.trim()
	const membershipStatus = true

	// Send a POST request to the server-side membership route with form data
	const response = await fetch(`/api/membership`, {
		method: 'POST',
		body: JSON.stringify({
			fName,
			lName,
			phone,
			dob,
			address,
			city,
			state,
			membershipStatus,
			planId,
			tierId
		}),
		headers: { 'Content-Type': 'application/json' }
	})

	// Check if the server responds with a successful status
	if (response.ok) {
		// Redirect the user to the profile page after successful membership creation
		document.location.replace('/profile')
	} else {
		// Log an error and display an alert if membership creation fails
		console.log(Error)
		alert('Failed to create membership.')
	}
}

// Add an event listener to the membership form, triggering the membershipFormHandler function on form submission
document.querySelector('.membership-form').addEventListener('submit', membershipFormHandler)
