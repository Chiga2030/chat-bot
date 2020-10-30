const newMessage = (text = dots, build = true, from = 'user') => {
	const userTemplate = `
			<div class='message__avatar message__avatar_${from}'></div>
			<div class='message__buble message__buble_${from}'>${text}</div>
	`;
	const message = document.createElement('div');

	message.classList.add('message');
	message.style.order = order() - 1;
	message.dataset.build = build;
	message.innerHTML = userTemplate;

	return message;
}
