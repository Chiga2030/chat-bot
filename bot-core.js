function botInterface(query = 'default') {
	let response;
	// sendMessage(defineComand(parseUserMessage(inputText.value)));

	const request = defineComand(parseUserMessage(query));
	console.log('request:', request);

	return {response};
}















function defineComand(data) {
	let newMessage;

	switch(data[0]) {
		case `/start`:
		case `/stop`:
			newMessage = new StartStopMessage(...data);
			console.log('определена команда СТАРТ или СТОП')
			return newMessage;
			break;
		case `/name`:
			newMessage = new NameMessage(...data);
			console.log('определена команда ИМЯ')
			return newMessage;
			break;
		case `/number`:
			newMessage = new NumMessage(...data);
			console.log('определена команда ЧИСЛО')
			return newMessage;
			break;
		default:
    		console.log( "Я не понимаю, введите другую команду!" );
	}
}


function parseUserMessage(data) {
	const reg = /:\s*|,\s*/;
	const argList = data.split(reg);

	return argList;
}





class StartStopMessage {
	constructor(comand) {
		this.comand = comand;
	}
}

class NameMessage extends StartStopMessage {
	constructor(comand, name) {
		super(comand);
		this.name = name;
	}
}

class NumMessage extends StartStopMessage {
	constructor(comand, num1, num2) {
		super(comand);
		this.num1 = num1;
		this.num2 = num2;
	}
}

module.exports = botInterface;
