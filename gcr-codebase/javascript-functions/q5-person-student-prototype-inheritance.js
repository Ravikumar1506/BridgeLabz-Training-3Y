// Q5: Person -> Student using constructor functions and prototypes
function Person(name) {
    this.name = name;
}

Person.prototype.showName = function () {
    console.log(`Name: ${this.name}`);
};

function Student(name, branch) {
    Person.call(this, name);
    this.branch = branch;
}

// Connect Student's prototype to Person's prototype.
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;

Student.prototype.showBranch = function () {
    console.log(`Branch: ${this.branch}`);
};

const student = new Student("Ravi", "CSE");
student.showName();
student.showBranch();

console.log("Is Student:", student instanceof Student);
console.log("Is Person:", student instanceof Person);
