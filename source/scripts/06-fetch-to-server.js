const sendMessage =  async (request='string') => {
	const url = 'http://localhost:3000/request-to-bot';

	let response = await fetch(url, {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json;charset=utf-8'
	  },
	  body: JSON.stringify({request})
	});

	let result = await response.json();
	console.log('РЕЗУЛЬТАТ FETCH ЗАПРОСА ', result);
	addMessage(newMessage(result.response.answer, false,'bot'), chatHistory)
}
