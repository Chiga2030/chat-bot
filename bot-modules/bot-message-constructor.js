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
		this.humidity = answer[0].main.humidity;
		this.temp = answer[0].main.temp;
		this.feels_like = answer[0].main.feels_like;
		this.answer = this.processedData();
	}

	processedData() {
		return `Погода на завтра: <br><br> Температура: ${this.temp} (ощущается как ${this.feels_like}) <br><br> Влажность ${this.humidity}%`;
	}
}

module.exports.Message = Message;
module.exports.NumMessage = NumMessage;
module.exports.WeatherMessage = WeatherMessage;
