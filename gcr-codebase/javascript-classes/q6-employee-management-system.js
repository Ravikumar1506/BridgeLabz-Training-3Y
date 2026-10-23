// Q6: Employee Management System
"use strict";
class Employee {
    constructor(id, name, department, salary) { Object.assign(this, { id, name, department, salary }); }
    getAnnualSalary() { return this.salary * 12; }
    applyBonus(percent) { this.salary += this.salary * percent / 100; }
}
const employees = [
    new Employee(1,"Amit","IT",45000), new Employee(2,"Sara","HR",38000),
    new Employee(3,"Kiran","Finance",52000), new Employee(4,"Neha","Support",32000),
    new Employee(5,"Rohit","IT",60000)
];
employees[0].applyBonus(5); // Demonstrate applying a 5% salary bonus.
employees.forEach(employee => console.log(`${employee.name} (${employee.department}) - Annual salary: ₹${employee.getAnnualSalary().toFixed(2)}`));
const totalAnnualPayout = employees.reduce((total, employee) => total + employee.getAnnualSalary(), 0);
console.log(`Total annual company payout: ₹${totalAnnualPayout.toFixed(2)}`);
