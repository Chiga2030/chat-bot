class Message {
	constructor(answer) {
		this.answer = answer;
	}
}

class NumMessage extends Message {
	constructor(answer, num1, num2) {
		super(answer);
		this.num1 = num1;
		this.num2 = num2;
	}
}

class WeatherMessage {
	constructor(answer) {
		this.answer = 'Погода на завтра:';
	}
}

module.exports.Message = Message;
module.exports.NumMessage = NumMessage;
module.exports.WeatherMessage = WeatherMessage;
