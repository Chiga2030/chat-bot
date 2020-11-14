// подключение express
const express = require("express");
// const cors = require('cors');
// создаем объект приложения
const app = express();
const PORT = process.env.PORT || 80;

const bot = require('./bot-modules/bot-interface.js');

// app.use(cors());
app.use(express.json()); // for parsing application/json

// определяем обработчик для маршрута "/"
app.post("/request-to-bot", function (request, response) {
    if(!request.body) return response.sendStatus(400);

    const botAnswer = new Promise( resolve => resolve(bot(request.body.request)) );
    
    botAnswer
    	.then(answer => response.send( answer ));
});

// начинаем прослушивать подключения
app.listen(PORT, () => {
	console.log('server has been started');
});
// app.listen(3000);
