const { validatePassword } = require("./server");

console.log("Starting password validation tests...");

// VALID password
if (!validatePassword("Abcdef1!")) {
    throw new Error("Test failed: valid password should return true");
}

// Too short
if (validatePassword("Ab1!")) {
    throw new Error("Test failed: short password should return false");
}

// Missing uppercase
if (validatePassword("abcdef1!")) {
    throw new Error("Test failed: missing uppercase should return false");
}

// Missing number
if (validatePassword("Abcdefg!")) {
    throw new Error("Test failed: missing number should return false");
}

// Missing special character
if (validatePassword("Abcdef12")) {
    throw new Error("Test failed: missing special character should return false");
}

// Invalid type
if (validatePassword(12345678)) {
    throw new Error("Test failed: non-string input should return false");
}

console.log("All password validation tests passed!");
