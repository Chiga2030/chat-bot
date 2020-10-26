class Message {
	constructor (from = 'user', textMessage = '') {
		this.from = from;
		this.textMessage = textMessage;
	}

	messageTemplate = () => `
			<div class='message__avatar message__avatar_${this.from}'></div>
			<div class='message__buble message__buble_${this.from}'>${this.textMessage}</div>
	`;

	toHtml = () => {
		const message = document.createElement('div');
		message.classList.add('message');
		message.style.order = orderMessage() - 1;
		message.innerHTML = this.messageTemplate();

		return message;
	}
}
