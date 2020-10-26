inputText.addEventListener('click', () => {
	const lastMessage = searchLastElement('.message');

	if( !lastMessage ) {
		const printEmptyMessage = new Promise(resolve => {
			addMessage(newMessage(''), chatHistory);
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
	};
});

inputText.addEventListener('blur', () => {
	lastBuble
		.then(lastBuble => {
			lastBuble.classList.remove('message__buble_user_has-tail');
			
			return lastBuble;
		})
		.then(lastBuble => {
			inputText.addEventListener('focus', () => {
				lastBuble.classList.add('message__buble_user_has-tail');
			});
		});
})
