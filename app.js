// подключение express
const express = require("express");
const cors = require('cors');
// создаем объект приложения
const app = express();

const bot = require('./bot-core.js');
// console.log(bot());

app.use(cors());
app.use(express.json()); // for parsing application/json

// определяем обработчик для маршрута "/"
app.post("/request-to-bot", function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);

    response.send(JSON.stringify(request.body));
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
