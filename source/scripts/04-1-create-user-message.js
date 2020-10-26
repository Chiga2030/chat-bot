const userTemplate = `
			<div class='message__avatar message__avatar_user'></div>
			<div class='message__buble message__buble_user'></div>
	`;

newMessage = () => {
	const message = document.createElement('div');
	message.classList.add('message');
	message.style.order = orderMessage() - 1;
	message.dataset.build = true;
	message.innerHTML = userTemplate;

	return message;
}










// class Message {
// 	constructor (from = 'user', textMessage = '', build = true) {
// 		this.from = from;
// 		this.textMessage = textMessage;
// 		this.build = build;
// 	}

// 	messageTemplate = () => `
// 			<div class='message__avatar message__avatar_${this.from}'></div>
// 			<div class='message__buble message__buble_${this.from}'>${this.textMessage}</div>
// 	`;

// 	toHtml = () => {
// 		const message = document.createElement('div');
// 		message.classList.add('message');
// 		message.style.order = orderMessage() - 1;
// 		message.innerHTML = this.messageTemplate();

// 		return message;
// 	}
// }

// const userMessage = new Message('user', '');

