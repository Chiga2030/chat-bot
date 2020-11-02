const history = require('./bot-history.js');
const Message = require('./bot-message-constructor.js');
const NumMessage = require('./bot-message-constructor.js');
const getWeather = require('./bot-fetch-weather.js');
getWeather()
function defineComand(data) {
	let answer;
	const wrongStart = new Message('Введите команду /start, для начала общения');
	const wrongNum = new Message('Укажите числа которые нужно посчитать. Команда /number: число1, число2');

	switch(data[0]) {
		case `/start`:
			history.add(data[0]);
			answer = new Message('Привет, меня зовут Чат-бот, а как зовут тебя?');
			return answer;
			break;

		case `/name`:
			if(history.isEmpty()) {
				return wrongStart;
			}
			answer = new Message(`Привет ${data[1]}, приятно познакомится. Я умею считать, введи числа которые надо посчитать`);
			return answer;
			break;

		case `/number`:
			if(history.isEmpty()) {
				return wrongStart;
			} else if(!data[2]) {
				return wrongNum;
			}
			history.add(data);
			answer = new NumMessage(`Выберите одно из действий: <br> - , + , * , /`);
			return answer;
			break;

		case `-`:
			if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] - +history.last()[2];
				answer = new NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `+`:
		if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] + +history.last()[2];
				answer = new NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `*`:
		if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] * +history.last()[2];
				answer = new NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `/`:
		if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] / +history.last()[2];
				answer = new NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `/stop`:
			history.clear();
			answer = new Message('Всего доброго, если хочешь поговорить пиши /start');
			return answer;
			break;

		case `/weather`:
			answer = new Message(getWeather());
			return answer;
			break;

		default:
			if(history.isEmpty()) {
				return wrongStart;
			}
			answer = new Message('Я не понимаю, введите другую команду!');
			return answer;
			break;
	}
}

module.exports = defineComand;
