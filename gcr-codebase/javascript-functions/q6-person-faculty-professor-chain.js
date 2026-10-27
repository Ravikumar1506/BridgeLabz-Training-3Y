// Q6: Person -> Faculty -> Professor prototype chain
function Person(name) {
    this.name = name;
}

Person.prototype.introduce = function () {
    console.log(`Person method: My name is ${this.name}.`);
};

function Faculty(name, department) {
    Person.call(this, name);
    this.department = department;
}

Faculty.prototype = Object.create(Person.prototype);
Faculty.prototype.constructor = Faculty;

Faculty.prototype.showDepartment = function () {
    console.log(`Faculty method: Department is ${this.department}.`);
};

function Professor(name, department, subject) {
    Faculty.call(this, name, department);
    this.subject = subject;
}

Professor.prototype = Object.create(Faculty.prototype);
Professor.prototype.constructor = Professor;

Professor.prototype.showSubject = function () {
    console.log(`Professor method: I teach ${this.subject}.`);
};

const professor = new Professor("Dr. Sharma", "Computer Science", "JavaScript");
professor.showSubject();
professor.showDepartment();
professor.introduce();

console.log("Is Professor:", professor instanceof Professor);
console.log("Is Faculty:", professor instanceof Faculty);
console.log("Is Person:", professor instanceof Person);
