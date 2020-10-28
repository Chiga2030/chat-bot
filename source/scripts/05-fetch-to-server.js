const data = { userName: 'example2', userAge: 'sample' };
const url = 'http://localhost:3000/request-to-bot';

(async () => {

let response = await fetch(url, {
  method: 'POST',
  // mode: 'cors',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(data)
});

let result = await response.text();
console.log(result);

}) ();

