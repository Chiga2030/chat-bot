/**
* api-doc for weather
* https://openweathermap.org/api/hourly-forecast
*
* url: pro.openweathermap.org/data/2.5/forecast/hourly?q=Moscow&appid=c3f20cd7c63db163cc1fab6a995318f7
*/

async function getWeather() {
	console.log('weather here')
	let city = 'Moscow';
	const APIKEY = 'c3f20cd7c63db163cc1fab6a995318f7';
	const url = `pro.openweathermap.org/data/2.5/forecast/hourly?q=${city}&appid=${APIKEY}`;

	const query = await fetch(url);

	query
		.then( data => data.json() )
		.then( weather => console.log(weather) );
}











module.exports = getWeather;
