const defineComand = require('./03-bot-define-comand.js');
const parseUserMessage = require('./02-bot-parse-user-message.js');

const answMock = {
	response: {
		answer: 'Ответ от бота'
	}
}

function botInterface(query) {
	const response = defineComand(parseUserMessage(query));

	return {response};
}

module.exports = botInterface;
