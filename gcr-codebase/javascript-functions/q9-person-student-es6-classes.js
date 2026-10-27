// Q9: Person -> Student using ES6 classes
class Person {
    constructor(name) {
        this.name = name;
    }

    showName() {
        console.log(`Name: ${this.name}`);
    }
}

class Student extends Person {
    constructor(name, branch) {
        super(name); // Initialize the name using the parent constructor.
        this.branch = branch;
    }

    showBranch() {
        console.log(`Branch: ${this.branch}`);
    }
}

const student = new Student("Ravi", "CSE");
console.log("ES6 class version:");
student.showName();
student.showBranch();
console.log("Is Student:", student instanceof Student);
console.log("Is Person:", student instanceof Person);

