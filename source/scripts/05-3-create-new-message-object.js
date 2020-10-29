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
