// Q8. Employee Salary Projection
const currentSalary = 40000;
const annualIncrementRate = 8;
let projectedSalary = currentSalary;
const salaryReport = [];

for (let year = 1; year <= 5; year++) {
    projectedSalary *= 1 + annualIncrementRate / 100;
    projectedSalary = Math.round(projectedSalary);
    salaryReport.push({
        year: year,
        salary: "₹" + projectedSalary.toLocaleString("en-IN")
    });
}
console.table(salaryReport);
