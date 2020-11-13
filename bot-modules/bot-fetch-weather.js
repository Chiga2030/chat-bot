const axios = require('axios');
const Message = require('./bot-message-constructor.js');

function getWeather(city) {
	const APIKEY = 'c3f20cd7c63db163cc1fab6a995318f7';
	const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}`;

    const output = axios.get(url, { 
    	params: {
    		lang: 'ru',
    		appid: APIKEY,
    		type: 'like',
    		units: 'metric',
    	}
    })
    .then(obj => obj.data.list);

    return output;
}

module.exports = getWeather;
