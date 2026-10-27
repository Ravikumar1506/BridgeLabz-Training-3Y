// Q4: Constructor Function and Prototype Method
function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

// This method is shared by all Car objects.
Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const firstCar = new Car("Toyota", "Corolla");
const secondCar = new Car("Honda", "Civic");

firstCar.getDetails();
secondCar.getDetails();
console.log("Both cars share the same method:", firstCar.getDetails === secondCar.getDetails);
