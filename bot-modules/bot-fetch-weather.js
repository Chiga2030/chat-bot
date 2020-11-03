const axios = require('axios');

async function getWeather() {
	let city = '%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0';
	const APIKEY = 'c3f20cd7c63db163cc1fab6a995318f7';
	const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}`;

  try {
    const response = await axios.get(url, { 
    	params: {
    		lang: 'ru',
    		appid: APIKEY,
    		type: 'like',
    		units: 'metric',
    	}
    });
    const result = await response.data.list[1]; // погода на завтра
	  return result;
  } catch (error) {
    console.error('Ошибка: ', error);
  }
}

module.exports = getWeather;
