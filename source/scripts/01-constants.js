let inputText = searchElement('.chat-window__text-buble-input');
const inputForm = searchElement('.chat-window__text-buble');
const submitBtn = searchElement('.chat-window__text-buble-button');
const chatHistory = searchElement('.chat-window__history');
const order = makeDecrementor();	// обратный счетчик для упорядочивания сообщений снизу вверх
let lastBuble;
const dots = '<span class="dotted-anim">.</span><span class="dotted-anim">.</span><span class="dotted-anim">.</span><span class="dotted-anim">.</span>';	// дефолтное содержимое бабла юзера
