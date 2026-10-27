// Q3: Arrow Function and this
const userWithArrow = {
    name: "Rahul",
    // Arrow functions inherit this from their surrounding scope.
    showName: () => console.log("Arrow function this.name:", this.name)
};

userWithArrow.showName(); // Usually undefined in a Node.js module.

const userWithNormalFunction = {
    name: "Rahul",
    // A normal method gets this from the object before the dot.
    showName: function () {
        console.log("Normal function this.name:", this.name);
    }
};

userWithNormalFunction.showName();


