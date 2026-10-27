// Q8: Custom myMap() method for arrays
Array.prototype.myMap = function (callback) {
    const result = [];

    for (let index = 0; index < this.length; index++) {
        // Skip empty slots in sparse arrays, like built-in map().
        if (index in this) {
            result[index] = callback(this[index], index, this);
        }
    }

    return result;
};

console.log([1, 2, 3].myMap(number => number * 2)); // [2, 4, 6]
console.log([1, 2, 3, 4].myMap((number, index) => number + index)); // [1, 3, 5, 7]

// Keep the custom method non-enumerable, like native array methods.
Object.defineProperty(Array.prototype, "myMap", { enumerable: false });
