function addMessage(message = '', toChat) {
	toChat.append(message);
	scrollToBottom(chatHistory);
}
