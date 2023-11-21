module.exports = {
	format_date: (date) => {
		return date.toLocaleDateString()
	},

	format_dob: (dateString) => {
		// Ensure dateString is not null or undefined
		if (!dateString) {
			return 'Invalid Date'
		}

		// Convert the dateString to a JavaScript Date object
		const dateObj = new Date(dateString)

		// Check if dateObj is a valid Date object
		if (Object.prototype.toString.call(dateObj) === '[object Date]' && !isNaN(dateObj.getTime())) {
			// Format the date as MM-DD-YYYY
			const formattedDate =
				(dateObj.getMonth() + 1).toString().padStart(2, '0') +
				'-' +
				dateObj.getDate().toString().padStart(2, '0') +
				'-' +
				dateObj.getFullYear()
			return formattedDate
		} else {
			// Handle invalid date format gracefully
			console.error('Invalid date format:', dateString)
			return 'Invalid Date'
		}
	}
}
