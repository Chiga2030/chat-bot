function submitMessage() {
	const lastBuble = searchLastElement('.message__buble');
	const lastMessage = searchLastElement('.message');

	lastMessage.innerHTML = '';
	addMessage(newMessage(inputText.value, false), chatHistory);
	// sendMessage(defineComand(parseUserMessage(inputText.value)));
	sendMessage(inputText.value);
	inputForm.reset();
	submitBtn.disabled = !isValid(inputText.value);
}
