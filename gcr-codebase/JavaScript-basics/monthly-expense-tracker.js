// Q3. Monthly Expense Tracker
const expenses = { food: 4500, travel: 1800, rent: 9000, bills: 1200, leisure: 1500 };
let total = 0;

for (const category in expenses) {
    total += expenses[category];
}

const average = total / Object.keys(expenses).length;
let finalAmount = total;
finalAmount += total * 0.10; // Add 10% tax using an assignment operator.

console.table([
    { label: "Total before tax", amount: total.toFixed(2) },
    { label: "Average expense", amount: average.toFixed(2) },
    { label: "Final amount after 10% tax", amount: finalAmount.toFixed(2) }
]);
