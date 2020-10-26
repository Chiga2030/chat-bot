const inputText = document.querySelector('.chat-window__text-buble-input');
const submitBtn = document.querySelector('.chat-window__text-buble-button');
const chatHistory = document.querySelector('.chat-window__history');
const order = makeDecrementor();	// обратный счетчик для упорядочивания сообщений снизу вверх
