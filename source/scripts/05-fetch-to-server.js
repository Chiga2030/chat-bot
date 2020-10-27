// const url = 'http://localhost:300/request-to-bot';
const data = { userName: 'example', userAge: 'sample' };
const url = 'http://localhost:300/request-to-bot';


let response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)
});

let result = await response.json();
alert(result.message);
