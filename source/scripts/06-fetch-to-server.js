const sendMessage =  async (request) => {
	const url = 'http://localhost:3000/request-to-bot';

	let response = await fetch(url, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json;charset=utf-8'
	  },
	  body: JSON.stringify(request)
	});

	let result = await response.json();
	console.log(result);
}
