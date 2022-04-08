module.exports = class Queue {
	constructor() {
		this.dataStore = [];
		this.count = 0;
	}

	enqueue(item) {
		this.dataStore.push(item);
		this.count++;
	}

	dequeue() {
		if (this.count <= 0) return;

		this.count--;
		return this.dataStore.shift();
	}

	front() {
		return this.dataStore[0];
	}

	back() {
		return this.dataStore[this.dataStore.length - 1];
	}

	toString() {
		return this.dataStore.join("\n");
	}

	isEmpty() {
		return this.dataStore.length === 0;
	}

	empty() {
		this.count = 0;
		this.dataStore = [];
	}
};
