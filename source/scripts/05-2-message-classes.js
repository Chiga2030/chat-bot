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
