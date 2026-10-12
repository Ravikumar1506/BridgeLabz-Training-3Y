// Q2. Multi-Type Data Summary
const userName = "Ravi";
const userAge = 20;
const isStudent = true;
const subjects = ["JavaScript", "HTML"];
const user = { city: "Mathura" };
const middleName = null;
let address;

// Array.isArray() identifies arrays because typeof [] returns "object".
console.table([
    { label: "userName", value: userName, type: typeof userName },
    { label: "userAge", value: userAge, type: typeof userAge },
    { label: "isStudent", value: isStudent, type: typeof isStudent },
    { label: "subjects", value: subjects.join(", "), type: Array.isArray(subjects) ? "array" : typeof subjects },
    { label: "user", value: JSON.stringify(user), type: typeof user },
    { label: "middleName", value: String(middleName), type: middleName === null ? "null" : typeof middleName },
    { label: "address", value: String(address), type: typeof address }
]);
