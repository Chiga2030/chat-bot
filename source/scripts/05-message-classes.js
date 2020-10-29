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