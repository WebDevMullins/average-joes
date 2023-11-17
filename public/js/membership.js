const membershipFormHandler = async (event) => {
	event.preventDefault()

	const plan_id = document.getElementById('planId').value.trim()
	const tier_id = document.getElementById('tierId').value.trim()

	const response = await fetch(`/api/users/`, {
		method: 'PUT',
		body: JSON.stringify({
			plan_id,
			tier_id
		}),
		headers: { 'Content-Type': 'application/json' }
	})
	if (response.ok) {
		document.location.replace('/')
	} else {
		console.log(Error)
		alert('Failed to update membership.')
	}
}

document.querySelector('.membership-form').addEventListener('submit', membershipFormHandler)
