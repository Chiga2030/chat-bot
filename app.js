// подключение express
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
// создаем объект приложения
const app = express();

app.use(cors());

// создаем парсер для данных application/x-www-form-urlencoded
const urlencodedParser = bodyParser.urlencoded({extended: false});

// определяем обработчик для маршрута "/"
app.post("/request-to-bot", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

// начинаем прослушивать подключения на 3000 порту
app.listen(3000);
