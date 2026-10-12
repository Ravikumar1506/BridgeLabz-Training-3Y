// Q4. Academic Performance Evaluator
// Replace these sample marks with marks out of 100.
const marks = [88, 91, 76, 84, 90];
const totalMarks = marks.reduce((sum, mark) => sum + mark, 0);
const average = totalMarks / marks.length;
const percentage = totalMarks / (marks.length * 100) * 100;
const failedSubject = marks.some(mark => mark < 35);

let result;
if (failedSubject) {
    result = "Detained";
} else if (percentage >= 85) {
    result = "Promoted with Distinction";
} else if (percentage >= 50) {
    result = "Promoted";
} else {
    result = "Detained";
}

console.log("Marks:", marks);
console.log("Average:", average.toFixed(2));
console.log("Overall Percentage:", percentage.toFixed(2) + "%");
console.log("Result:", result);
