// Q9. JSON Audit
"use strict";
const rawData = ['{"user":"Alex","age":25}', '{"id":2}', '{invalid}', '{"user":"Mina","age":"22"}'];
const cleanData = [], errors = [], under18Users = [];
for (let index = 0; index < rawData.length; index++) {
    const lineNumber = index + 1;
    try {
        const parsed = JSON.parse(rawData[index]);
        if (!Object.prototype.hasOwnProperty.call(parsed, "user") || !Object.prototype.hasOwnProperty.call(parsed, "age")) throw new Error("Missing required key: user or age.");
        const age = Number(parsed.age); if (!Number.isFinite(age)) throw new TypeError("Age is not a valid number.");
        const entry = { user: parsed.user, age }; cleanData.push(entry); if (age < 18) under18Users.push(entry);
        console.log(`Line ${lineNumber}: valid JSON and required keys found.`);
    } catch (error) { errors.push({ line: lineNumber, message: error.message }); console.log(`Line ${lineNumber} error: ${error.message}`); }
}
console.log("Clean data:", JSON.stringify(cleanData)); console.log("Errors:", JSON.stringify(errors)); console.log("Users under 18:", JSON.stringify(under18Users));
