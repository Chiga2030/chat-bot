const inputText = document.querySelector('.chat-window__text-buble-input');
const submitBtn = document.querySelector('.chat-window__text-buble-button');
const chatHistory = document.querySelector('.chat-window__history');
const orderMessage = makeCounter();	// обратный счетчик для упорядочивания сообщений снизу вверх