// подключение express
const express = require("express");
const cors = require('cors');
// создаем объект приложения
const app = express();

const bot = require('./bot-modules/bot-interface.js');

app.use(cors());
app.use(express.json()); // for parsing application/json

// определяем обработчик для маршрута "/"
app.post("/request-to-bot", function (request, response) {
    if(!request.body) return response.sendStatus(400);

    response.send(bot(request.body.request));
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
