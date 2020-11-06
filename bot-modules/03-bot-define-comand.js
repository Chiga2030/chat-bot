const history = require('./04-bot-history.js');
const Message = require('./05-bot-message-constructor.js');
const getWeather = require('./06-bot-fetch-weather.js');
const searchTomorrowWeather = require('./bot-search-tomorrow-weather.js');

function defineComand(data) {
	let answer;
	const wrongStart = new Message.Message('Введите команду /start, для начала общения');
	const wrongNum = new Message.Message('Укажите числа которые нужно посчитать. Команда /number: число1, число2');

	switch(data[0]) {
		case `/start`:
			history.add(data[0]);
			answer = new Message.Message('Привет, меня зовут Чат-бот, а как зовут тебя?');
			return answer;
			break;

		case `/name`:
			if(history.isEmpty()) {
				return wrongStart;
			}
			answer = new Message.Message(`Привет ${data[1]}, приятно познакомится. Я умею считать, введи числа которые надо посчитать`);
			return answer;
			break;

		case `/number`:
			if(history.isEmpty()) {
				return wrongStart;
			} else if(!data[2]) {
				return wrongNum;
			}
			history.add(data);
			answer = new Message.NumMessage(`Выберите одно из действий: <br> - , + , * , /`);
			return answer;
			break;

		case `-`:
			if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] - +history.last()[2];
				answer = new Message.NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `+`:
		if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] + +history.last()[2];
				answer = new Message.NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `*`:
		if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] * +history.last()[2];
				answer = new Message.NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `/`:
		if(history.isEmpty()) {
				return wrongStart;
			} else if (history.last()[0] === '/number' ) {
				const calc = +history.last()[1] / +history.last()[2];
				answer = new Message.NumMessage(`${history.last()[1]} ${data[0]} ${history.last()[2]} = ${calc}`);
				return answer;
			}
			return wrongNum;
			break;

		case `/stop`:
			if(history.isEmpty()) {
				return wrongStart;
			}
			history.clear();
			answer = new Message.Message('Всего доброго, если хочешь поговорить пиши /start');
			return answer;
			break;

		case `/weather`:
			history.add(data[0]);
			answer = new Message.Message(`В каком городе вы хотите узнать погоду?`);
			return answer;
			break;

		default:
			if(history.last() === '/weather') {
				const weather = getWeather(encodeURI(data[0]))
					.then( forecast => searchTomorrowWeather( forecast ) )
					.then( answer => (new Message.WeatherMessage(answer)) )
					.catch( e => {
						if(e.response.data.cod) {
							return new Message.Message('Такого города не найдено, попробуйте снова');
						}
					});
				history.clearLast();
				return weather;
				break;
			} else if(history.isEmpty()) {
				return wrongStart;
			}
			answer = new Message.Message('Я не понимаю, введите другую команду!');
			return answer;
			break;
	}
}

module.exports = defineComand;
