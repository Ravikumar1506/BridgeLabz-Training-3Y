// Q4. Array Performance Analyzer
// Generate 8 random integer scores from 30 to 100.
const scores = Array.from({ length: 8 }, () => Math.floor(Math.random() * 71) + 30);
const displayedScores = scores.map(score => score);
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const totalScore = scores.reduce((sum, score) => sum + score, 0);
const averageScore = totalScore / scores.length;
const passedStudents = scores.filter(score => score >= 50).length;

console.log(`
Array Performance Summary
Scores: ${displayedScores.join(", ")}
Highest: ${highestScore}
Lowest: ${lowestScore}
Average: ${averageScore.toFixed(2)}
Students passed: ${passedStudents}
`);
