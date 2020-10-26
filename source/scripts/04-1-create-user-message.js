newMessage = (text) => {
	const userTemplate = `
			<div class='message__avatar message__avatar_user'></div>
			<div class='message__buble message__buble_user'>${text}</div>
	`;
	const message = document.createElement('div');

	message.classList.add('message');
	message.style.order = order() - 1;
	message.dataset.build = true;
	message.innerHTML = userTemplate;

	return message;
}
