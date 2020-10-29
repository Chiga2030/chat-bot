function parseUserMessage(data) {
	const reg = /:\s*|,\s*/;
	const argList = data.split(reg);

	return argList;
}

const dataStart = parseUserMessage(`/start`);
const dataName = parseUserMessage(`/name: Alex`);
const dataNum = parseUserMessage(`/number: 7, 9`);
const dataStop = parseUserMessage(`/stop`);

console.log(dataStart, dataName, dataNum, dataStop);
