function getTomorrowDate() {
	const today = new Date();
	const tomorrow = new Date(today);
	tomorrow.setDate(today.getDate() + 1 )
	tomorrow.setHours(12);
	tomorrow.setMinutes(0);
	tomorrow.setSeconds(0);

	return tomorrow.toUTCString();
}

function searchTomorrowWeather (arrWeather) {
	const tomorrow = getTomorrowDate();
	const result = arrWeather.filter( obj => new Date(obj.dt_txt).toUTCString() === tomorrow );
	
	return result;
}

module.exports = searchTomorrowWeather;
