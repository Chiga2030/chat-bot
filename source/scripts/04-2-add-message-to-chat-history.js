function addMessage(message = '', toChat) {
	toChat.insertAdjacentHTML('beforeend', message);
	scrollToBottom(chatHistory);
}
