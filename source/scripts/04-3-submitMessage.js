function submitMessage() {
	const lastBuble = searchLastElement('.message__buble');
	const lastMessage = searchLastElement('.message');

	lastMessage.parentNode.removeChild(lastMessage);
	addMessage(newMessage(inputText.value, false), chatHistory);
	sendMessage(inputText.value);
	inputForm.reset();
	submitBtn.disabled = !isValid(inputText.value);
}
