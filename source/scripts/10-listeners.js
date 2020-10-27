inputText.addEventListener('input', () => {
	const lastMessage = searchLastElement('.message');

	submitBtn.disabled = !isValid(inputText.value);

	if( lastMessage.dataset.build === 'true' ) {
		typping();
	} else {
		addMessage(newMessage(), chatHistory);
		const lastBuble = searchLastElement('.message__buble');
		lastBuble.classList.add('message__buble_user_has-tail');
	}
});

inputText.addEventListener('keydown', event => {
	if ( event.code === 'Enter' || event.code === 'NumpadEnter' ) {
		event.preventDefault();
		if ( isValid(inputText.value) ) {
			submitMessage();
		}
	}
});

submitBtn.addEventListener('click', () => {
		submitMessage();
});
