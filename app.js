// подключение express
const express = require("express");
const cors = require('cors');
// создаем объект приложения
const app = express();
const PORT = process.env.PORT || 3000;
console.log(PORT)

const bot = require('./bot-modules/bot-interface.js');

app.use(cors());
app.use(express.json()); // for parsing application/json
app.use(express.static("client"));

// определяем обработчик для маршрута пост запроса
app.post("/request-to-bot", (request, response) => {
    if(!request.body) return response.sendStatus(400);

    const botAnswer = new Promise( resolve => resolve(bot(request.body.request)) );
    
    botAnswer
    	.then(answer => response.send( answer ));
});

// начинаем прослушивать подключения
app.listen(PORT, () => {
	console.log(`server has been started on port: ${PORT}`);
});
