const defineComand = require('./03-bot-define-comand.js');
const parseUserMessage = require('./02-bot-parse-user-message.js');

function botInterface(query) {
	const response = new Promise( resolve => resolve( defineComand(parseUserMessage(query)) ) );
	return response;
}

module.exports = botInterface;
