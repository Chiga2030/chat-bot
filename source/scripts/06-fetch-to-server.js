function sendMessage(request) {
	const url = () => {
		if( location.hostname === 'localhost' ) {
			return `${location.protocol}//${location.hostname}:3000/request-to-bot`;
		} return `${location.href}request-to-bot`;
	}

	let response = fetch(url(), {
	  method: 'POST',
	  headers: {
	    'Content-Type': 'application/json;charset=utf-8'
	  },
	  body: JSON.stringify({request})
	});

	response
		.then(data => data.json())
		.then(answer => addMessage(newMessage(answer.answer, false,'bot'), chatHistory));
}
