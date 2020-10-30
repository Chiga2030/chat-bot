function botInterface(query) {
	let response;

	const request = defineComand(parseUserMessage(query));
	console.log('request:', request);

	response = request;

	return {response};
}






const history = {
	// archive: [],
	archive: [ '/start', [ '/number', '3', '4' ] ],

	add(entry) {
		this.archive.push(entry);
	},
	clear() {
		this.archive = [];
	},
	check() {
		isEmpty = !this.archive[0];
		return isEmpty;
	},
	calc(operator) {
		if(this.archive[this.archive.length-1][0] === '/number') {
			const v1 = Number(this.archive[this.archive.length-1][1]);
			const v2 = operator;
			const v3 = Number(this.archive[this.archive.length-1][2]);
console.log(typeof(v1), typeof(v2), v3);

			const result = '';
			return result;
		}
	}
}

console.log(history.check())

console.log((history.calc(0)))

console.log(parseInt('2 + 4', 10));

function defineComand(data) {
	let answer;
	const wrongStart = new Message('Введите команду /start, для начала общения');
	const wrongNum = new Message('Нужно указать 2 значения');

	switch(data[0]) {
		case `/start`:
			history.add(data[0]);
			answer = new Message('Привет, меня зовут Чат-бот, а как зовут тебя?');
			return answer;
			break;

		case `/name`:
			if(history.check()) {
				return wrongStart;
			}
			answer = new Message(`Привет ${data[1]}, приятно познакомится. Я умею считать, введи числа которые надо посчитать`);
			return answer;
			break;

		case `/number`:
			if(history.check()) {
				return wrongStart;
			} else if(!data[2]) {
				return wrongNum;
			}
			history.add(data);
			console.log(history.archive);
			answer = new NumMessage(`Выберите одно из действий: <br> - , + , * , /`);
			return answer;
			break;

		case `-`:
		case `+`:
		case `*`:
		case `/`:
			answer = new NumMessage(Number(history.calc(data[0])));
			return answer;
			break;

		case `/stop`:
			history.clear();
			answer = new Message('Всего доброго, если хочешь поговорить пиши /start');
			return answer;
			break;

		default:
		// сначала проверка на /Start
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
