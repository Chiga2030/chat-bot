function parseUserMessage(data) {
	const reg = /:\s*|,\s*/;
	const argList = data.split(reg);

	return argList;
}

module.exports = parseUserMessage;
