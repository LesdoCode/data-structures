const Queue = require("../src/Queue");
let numbers;

describe("Queue class", () => {
	beforeEach(() => {
		numbers = new Queue();
	});

	describe("enqueue method", () => {
		numbers = new Queue();
		it("should return undefined", () => {
			expect(numbers.enqueue("hello")).toEqual(undefined);
		});

		it("should increment the count variable", () => {
			numbers.enqueue(1);
			expect(numbers.count).toEqual(1);
		});
		it("should add one item to the queue", () => {
			numbers.enqueue(1);
			expect(numbers.dequeue()).toEqual(1);
		});

		it("should insert undefined when given no params", () => {
			numbers.enqueue();
			expect(numbers.count).toEqual(1);
			expect(numbers.dequeue()).toEqual(undefined);
		});
	});

	describe("dequeue method", () => {
		beforeEach(() => {
			populateNumbersQueue();
		});

		it("should return the first inserted item", () => {
			for (let i = 0; i < 10; i++) {
				expect(numbers.dequeue()).toEqual(i);
			}
		});

		it("should decrement the count property", () => {
			expect(numbers.count).toEqual(10);

			for (let i = 0; i < 10; i++) {
				numbers.dequeue();
				expect(numbers.count).toEqual(9 - i);
			}
		});

		it("should return undefined when the queue is empty", () => {
			numbers.empty();
			expect(numbers.dequeue()).toEqual(undefined);
		});

		it("should not decrement the count property when queue is empty", () => {
			numbers.empty();
			numbers.dequeue();
			expect(numbers.count).toEqual(0);
		});
	});

	describe("front method", () => {
		beforeEach(() => {
			populateNumbersQueue();
		});
		it("should return the element at the beginning of the queue", () => {
			expect(numbers.front()).toEqual(0);
		});

		it("should not remove any element from the queue", () => {
			expect(numbers.count).toEqual(10);
			numbers.front();
			expect(numbers.count).toEqual(10);
		});

		it("should return undefined when the queue is empty", () => {
			numbers.empty();
			expect(numbers.front()).toEqual(undefined);
		});
	});

	describe("back method", () => {
		beforeEach(populateNumbersQueue);
		it("should return the element at the end of the queue", () => {
			expect(numbers.back()).toEqual(9);
		});

		it("should not remove any element from the queue", () => {
			expect(numbers.count).toEqual(10);
			numbers.back();
			expect(numbers.count).toEqual(10);
		});

		it("should return undefined when the queue is empty", () => {
			numbers.empty();
			expect(numbers.back()).toEqual(undefined);
		});
	});

	describe("toString method", () => {
		it("should return a string", () => {
			expect(numbers.toString()).toBeInstanceOf(String);
		});

		it("should return the elements of the array separated by a new line character", () => {
			const expectedArrayString = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].join("\n");
			populateNumbersQueue();
			expect(numbers.toString()).toEqual(expectedArrayString);
		});

		it("should not modify the internal array", () => {
			numbers.toString();
			populateNumbersQueue();
			expect(numbers.dataStore).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
		});
	});

	describe("isEmpty method", () => {
		it("should return a boolean value", () => {
			expect(numbers.isEmpty()).toBeInstanceOf(Boolean);
		});

		it("should return true if the queue is empty", () => {
			expect(numbers.isEmpty()).toEqual(true);
		});

		it("should return false if the queue is not empty", () => {
			populateNumbersQueue();
			expect(numbers.isEmpty()).toEqual(false);
		});
	});

	describe("empty functions", () => {
		it("should return undefined", () => {
			expect(numbers.empty()).toEqual(undefined);
		});
		it("should empty the internal array", () => {
			numbers.empty();
			expect(numbers.dataStore).toEqual([]);
		});

		it("should set the count property to 0", () => {
			numbers.empty();
			expect(numbers.count).toEqual(0);
		});

		it("should not throw errors even when the queue is empty", () => {
			if (!numbers.isEmpty()) {
				numbers.empty();
			}
			expect(() => numbers.empty()).not.toThrowError();
		});
	});
});

function populateNumbersQueue() {
	for (let i = 0; i < 10; i++) {
		numbers.enqueue(i);
	}
}
