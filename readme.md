# Тестовое задание по JavaScript

## Среда разработки

![Sublume](https://bmatwifilabs.files.wordpress.com/2018/03/sublime-icon_1x.png)

Я выбрал для реализации задания - **Sublume Text 3**
с основным набором плагинов:

+ Terminus, для запуска скриптов из текстового редактора.
+ W3CValidators, для быстрой проверки html и css на валидность.
+ Emmet, для ускорения написания html и css кода.
+ All Autocomplete, для упрощения написания JS кода.

Почему именно **Sublime**?

Быстрый, легковесный, легко расширяемый с большим набором плагинов.
Так же меня привлекает его не очень дружелюбный интерфейс, что на мой взгляд идеально для начала изучения программирования, так как он провоцирует к тому, чтобы ты разобрался как работает тот или иной плагин или bash скрипт.

---

## Сборка

**Gulp 3**

Самый быстрый путь тот, который тебе известен, этот принцип и был основополагающем при старте проекта с Gulp v3.

Дополнительный бонус в том, что у меня уже были наработки по конфигурации gulpfile которые требовалось довести до конца, а значит можно "убить 2х зайцев", автоматизировав задачи сборки проекта и создать готовую конфигурацию для будущий проектов.

### Плагины используемые при сборке:

+ gulp-env
+ gulp-if

*в переменные окружения я вписываю информацию о том как собирать проект, под разработку или в "продакшен", оба плагина работают в связке*

+ gulp-babel

*траншпиляция в es5 синтаксис JS кода, для большей совместимости в разных браузерах*

+ gulp-concat

*для объединения множества мелких `CSS` и `JS` файлов*
> ... должен сказать, что CSS блоки у меня пока еще выходят довольно таки большими по объему, но JS файлы разбиты четко по модулям, каждый файл отвечает за свой кусок логики.

*порядок объединения файлов формируется названиями*

```
folder scripts:
  |--> 01-constants.js
  |--> 02-form-validation.js
  |--> 03-0-scrollbar-to-bottom.js
  |--> 03-1-search-element.js
  |--> 03-2-search-last-element.js
  ...
```

+ gulp-uglify
+ gulp-cssnano
+ gulp-imagemin

*минифицирует `JS` и `CSS` код, последний минифицирует изображения, будем экономить пару миллисекунд при загрузке приложения*

+ gulp-sourcemaps

*полезный плагин при разработке, в отладочном режиме упрощает поиск ошибок*

+ browser-sync

*перезапуск задачи сборщика при внесении изменений в исходный код, сильно экономим время на проверках работы приложения*

+ gulp-rigger

*плагин вставляет содержимое html файла в файл с родительским элементом, улучшает читаемость исходного кода, приближает нас к концепции разделения html-кода на маленькие блоки*

+ gulp-ttf2woff
+ gulp-ttf2woff2

*плагины конвертируют ttf файлы в woff и woff2 соответственно, затем полученный результат копируется в папку buil, тем самым я закрываю вопрос совместимости разный форматов шрифтов и их поддержки в разных браузерах*

+ gulp-autoprefixer

*современные браузеры во многом солидарны в вопросе интерпретации CSS-свойств, но подстраховаться вендорными префиксами никогда не лишне*

+ gulp-nodemon

*в приложении я решил делать имитацию запросов к боту, а полноценный сценарий запрос-ответ на сервер, и нужно было часто перезапускать серверную часть приложения, в результате был добавлен еще и этот плагин*

---

## Выполнение задания

Работа была разделена на следующие этапы:
1. Написание структуры окна чата в index.html
2. Описание основных стилей, что бы понимать как это будет примерно выглядеть
3. Написание базовой логики по дабавлению сообщений в окно чата
4. Написание серверной части логики приложения
5. Доработки и справления ошибок

### Frontend

#### Стили и разметка

Так как объем работы не очень большой, я решил не тратить дополнительно время на изучение синтаксиса CSS препроцессора, в итоге все стили написаны на чистом CSS с применением методологии именования БЭМ.

*В начальных версиях приложения можно найти применение инлайновых стилей в html разметке, но из-за проблем с отображения контента в Firefox в конечном итоге от них удалось избавится и в финале все стили были вынесены в отдельный .css файл*

Шрифты подключаются через отдельный .css файл, для сборки которого есть отдельная задача в Gulp'e

*Это сделано для упрощения добавления дополнительных шрифтов и начертаний*

Правильного отображения контента в мобильной версии для разных разрешений экранов удалось добиться при помощи всего одного бреэкпоитна.

#### Логика

##### Работа с элементами html-разметки

В отдельный файл **01-constants.js** вынесены основные переменные с которыми происходит взаимодействие во время работы приложения.

*Для поиска элементов написаны маленькие вспомогательные функции*

##### Не кликабельная кнопка в форме отправки запроса

Для деактивации кнопки "Отправить сообщение" при пустом поле ввода написана простенькая функция проверки длины строки в этом самом поле.

##### Переписка в окне чата начинается снизу

Изначально была написана функция котороая в момент добавления нового сообщения в окно чата инлайново вписывала свойство `order: -n;`, значение `n` хранилось в замыкании функции. 
При этом сообщения выстраивались снизу вверх и казалось, что задача решена, однако позже выяснилось, что Firefox генерирует scrollbar для окна в точности наоборот нежели Chrome, соответственно при проверке вылезли нежелательные 'сайды', и от идеи выстраивать порядок сообщений через свойство 'order' пришлось отказаться, CSS был переписан а JS функция была заменена на фунцию которая просто перемещает scroll вниз страницы после добавления соббщения в окно чата.

*В итоге эта часть приложения стала проще, а значит лучше*

##### Анимация троеточия

При фокусе на поле ввода, в окно чата добавляется баблик с тремя точками. Если в поле ввода пользователь начинает вводить текст, по событие вызывается функция которая поочередно меняет 'жирность' каждой точки через свойство 'font-weight'. Информация о том какой из точек нужно изменить своство font-weight, функция хранит в замыкании.

##### Запросы к серверной части

При запросах используется Fetch и далее цепочкой промисов от сервера получаем нужную информацию.

### Backend

#### Инструментарий

1. Node.js
2. Express
3. CORS
4. Axios
