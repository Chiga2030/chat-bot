function botInterface(query) {
	let response;

	const request = defineComand(parseUserMessage(query));
	console.log('request:', request);

	response = request;

	return {response};
}






const history = {
	archive: [],

	add(entry) {
		this.archive.push(entry);
	},
	clear() {
		this.archive = [];
	},
}






function defineComand(data) {
	let newMessage;

	switch(data[0]) {
		case `/start`:
			history.add(data[0]);
			newMessage = new Message('Привет, меня зовут Чат-бот, а как зовут тебя?');
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
		case `/stop`:
			history.clear();
			newMessage = new Message('Всего доброго, если хочешь поговорить пиши /start');
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





class Message {
	constructor(answer) {
		this.answer = answer;
	}
}

class NameMessage extends Message {
	constructor(answer, name) {
		super(answer);
		this.name = name;
	}
}

class NumMessage extends Message {
	constructor(answer, num1, num2) {
		super(answer);
		this.num1 = num1;
		this.num2 = num2;
	}
}

module.exports = botInterface;
