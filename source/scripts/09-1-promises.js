inputText.addEventListener('focus', () => {
	const lastMessage = searchLastElement('.message');

	if( lastBuble &&  (lastMessage.dataset.build === 'true')) {
		const lastBuble = searchLastElement('.message__buble_user');
		lastBuble.classList.add('message__buble_user_has-tail');
	}	else if( !lastMessage || (lastMessage.dataset.build === 'false') ) {
		const printEmptyMessage = new Promise(resolve => {
			addMessage(newMessage(), chatHistory);
			const lastBuble = searchLastElement('.message__buble_user');

			resolve(lastBuble);
		});

		printEmptyMessage
			.then(lastBuble => {
				lastBuble.classList.add('message__buble_user_has-tail');

				return lastBuble;
			})
			.then(buble => {
				lastBuble = new Promise(resolve => {

					resolve(buble);
				});
			});
	}
});

inputText.addEventListener('blur', () => {
	if( lastBuble ) {
		const lastBuble = searchLastElement('.message__buble_user');
		lastBuble.classList.remove('message__buble_user_has-tail');
	}
});
