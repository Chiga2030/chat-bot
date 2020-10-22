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

postingMessage('')
// postingMessage('test2')
// postingMessage('test3')
// postingMessage('test4')
// postingMessage('test5')
// postingMessage('test6')
