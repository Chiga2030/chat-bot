const history = {
	archive: [],

	add(entry) {
		this.archive.push(entry);
	},
	clear() {
		this.archive = [];
	},
	clearLast() {
		this.archive.pop();
	},
	isEmpty() {
		const empty = !this.archive[0];
		return empty;
	},
	last() {
		const lastRecord = this.archive[this.archive.length - 1];
		return lastRecord;
	}
}

module.exports = history;
