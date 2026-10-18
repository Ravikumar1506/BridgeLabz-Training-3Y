// Q3. Transaction Validator
"use strict";
const transactions = [{ id: 1, amount: 2000 }, { id: 2, amount: -500 }, { id: 3 }, null];
const valid = [], invalid = [];
for (let index = 0; index < transactions.length; index++) {
    try {
        const transaction = transactions[index];
        if (transaction === null) { const error = new Error("Null transaction entry."); error.name = "NullEntryError"; throw error; }
        if (transaction.id === undefined || transaction.amount === undefined) { const error = new Error("Missing id or amount."); error.name = "MissingFieldError"; throw error; }
        if (transaction.amount < 0) { const error = new Error("Negative amount."); error.name = "NegativeAmountError"; throw error; }
        valid.push(transaction); console.log(`Transaction ${transaction.id}: valid`);
    } catch (error) { invalid.push({ index, type: error.name, message: error.message }); console.log(`Index ${index}: ${error.name} - ${error.message}`); }
}
console.log("Valid transactions:", JSON.stringify(valid)); console.log("Invalid transactions:", JSON.stringify(invalid));
console.log(`Successful: ${valid.length}; Failed: ${invalid.length}`);

