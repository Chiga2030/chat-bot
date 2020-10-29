function defineComand(comand) {
	switch(comand) {
		case `/start`:
			console.log('пришла команда СТАРТ')
			break;
		case `/name`:
			console.log('пришла команда ИМЯ')
			break;
		case `/number`:
			console.log('пришла команда ЧИСЛО')
			break;
		case `/stop`:
			console.log('пришла команда СТОП')
			break;
		default:
    		console.log( "Я не понимаю, введите другую команду!" );
	}







}

defineComand(dataStart[0]);
defineComand(dataName[0]);
defineComand(dataNum[0]);
defineComand(dataStop[0]);
defineComand(dataStop[1]);