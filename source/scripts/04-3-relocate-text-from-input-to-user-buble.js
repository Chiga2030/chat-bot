function submitMessage() {
	const lastBuble = searchLastElement('.message__buble');
	const lastMessage = searchLastElement('.message');

	lastMessage.innerHTML = '';
	addMessage(newMessage(inputText.value, false), chatHistory);
	inputText.value = '';
}
