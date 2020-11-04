const axios = require('axios');

function getWeather() {
	let city = '%D0%BC%D0%BE%D1%81%D0%BA%D0%B2%D0%B0';
	const APIKEY = 'c3f20cd7c63db163cc1fab6a995318f7';
	const url = `http://api.openweathermap.org/data/2.5/forecast?q=${city}`;

    axios.get(url, { 
    	params: {
    		lang: 'ru',
    		appid: APIKEY,
    		type: 'like',
    		units: 'metric',
    	}
    })
    .then(data => {
      const output = data.data.list[1];
      return output;
    });

    // console.log('response --- ', response);

   //  response
   //    .then( q => {
   //      res = q.data.list[1]
   //      return res;
   //    } );
   //    // .data.list[1]; // погода на завтра
	  // // return result;

    return 'output';
}

module.exports = getWeather;
