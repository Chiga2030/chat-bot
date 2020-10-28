const url = 'http://localhost:3000/request-to-bot';

class Query {
	constructor(body) {
		this.body = body;
		this.comand = this.parse()[0];
		this.arg1 = this.parse()[1];
		this.arg2 = this.parse()[2];
	}

	parse() {
		const reg = /:\s*|,\s*/;
		const argList = this.body.split(reg);
		return argList;
	}

	bodyFree() {
		delete this.body;
	}
}

const quickMath = new Query('/number: 7, 9');
quickMath.bodyFree();

(async () => {

let response = await fetch(url, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  },
  body: JSON.stringify(quickMath)
});

let result = await response.json();
console.log(result);

}) ();

