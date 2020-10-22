const createMessage = (textMessage) => {
	const messageTemplate = `
			<div class='message__avatar message__avatar_user'></div>
			<div class='message__buble message__buble_user'>${textMessage}</div>
	`;
	const message = document.createElement('div');
	message.classList.add('message');
	message.style.order = orderMessage() - 1;
	message.innerHTML = messageTemplate;

	return message;
}

const postingMessage = (text) => {
	chatHistory.appendChild(createMessage(text))
};

// postingMessage('test')

const curentMessage = new Promise( resolve => {
    resolve(postingMessage(''));
});

 curentMessage
	.then(userBuble = document.querySelectorAll('.message__buble_user'));
