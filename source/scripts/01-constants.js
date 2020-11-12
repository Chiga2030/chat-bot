let inputText = searchElement('.chat-window__text-buble-input');
const inputForm = searchElement('.chat-window__text-buble');
const submitBtn = searchElement('.chat-window__text-buble-button');
const chatWindow = searchElement('.chat-window');
const chatHistory = searchElement('.chat-window__history');
let lastBuble;	//объявление переменной, для корректного отловапоследнего пользовательского сообщения
const dots = '<span class="dotted-anim">.</span><span class="dotted-anim">.</span><span class="dotted-anim">.</span><span class="dotted-anim">.</span>';	// дефолтное содержимое бабла юзера
