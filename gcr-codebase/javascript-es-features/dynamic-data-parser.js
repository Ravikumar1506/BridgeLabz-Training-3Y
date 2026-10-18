// Q1. Dynamic Data Parser
"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];
const validNumericData = [], invalidData = [];
for (let index = 0; index < apiData.length; index++) {
    const value = apiData[index];
    const numericValue = Number(value);
    const report = { original: String(value), number: Number.isNaN(numericValue) ? "NaN" : numericValue, boolean: Boolean(value), string: String(value) };
    const whitespace = typeof value === "string" && value.trim() === "";
    if (value !== null && value !== undefined && !whitespace && Number.isFinite(numericValue)) { validNumericData.push(numericValue); console.log("VALID:", JSON.stringify(report)); }
    else { invalidData.push(value); console.log("INVALID:", JSON.stringify(report)); }
}
console.log("Valid numeric data:", JSON.stringify(validNumericData));
console.log("Invalid data:", JSON.stringify(invalidData));
console.log(`Valid count: ${validNumericData.length}; Invalid count: ${invalidData.length}`);
