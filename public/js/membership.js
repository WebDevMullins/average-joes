const membershipFormHandler = async (event) => {
	event.preventDefault()

	const fName = document.getElementById('f_name').value.trim()
	const lName = document.getElementById('l_name').value.trim()
	const phone = document.getElementById('phone').value.trim()
	const dob = document.getElementById('dob').value.trim()
	const address = document.getElementById('address').value.trim()
	const city = document.getElementById('city').value.trim()
	const state = document.getElementById('state').value.trim()
	const planId = document.getElementById('planId').value.trim()
	const tierId = document.getElementById('tierId').value.trim()

	const response = await fetch(`/api/users/member`, {
		method: 'POST',
		body: JSON.stringify({
			fName,
			lName,
			phone,
			dob,
			address,
			city,
			state,
			planId,
			tierId
		}),
		headers: { 'Content-Type': 'application/json' }
	})
	console.log(fName, lName, phone, dob, address, city, state, planId, tierId)
	if (response.ok) {
		document.location.replace('/profile')
	} else {
		console.log(Error)
		alert('Failed to create membership.')
	}
}

document.querySelector('.membership-form').addEventListener('submit', membershipFormHandler)
