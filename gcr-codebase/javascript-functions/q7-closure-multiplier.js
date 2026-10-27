// Q7: Closure - Make a Multiplier
function makeMultiplier(multiplier) {
    return function (number) {
        return number * multiplier;
    };
}

const triple = makeMultiplier(3);
const double = makeMultiplier(2);

console.log("Triple 5:", triple(5)); // 15
console.log("Triple 10:", triple(10)); // 30
console.log("Double 5:", double(5)); // 10


