const defineComand = require('./bot-define-comand.js');
const parseUserMessage = require('./bot-parse-user-message.js');

function botInterface(query) {
	const response = new Promise( resolve => resolve( defineComand(parseUserMessage(query)) ) );
	return response;
}

module.exports = botInterface;
