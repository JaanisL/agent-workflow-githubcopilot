const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Validate password functionality.
function validatePassword(password) {
    const minLength = 6;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);

    return password.length >= minLength && hasUpperCase && hasLowerCase && hasNumbers;
}

// Health endpoint.
app.get('/health', (req, res) => {
    res.status(200).json({ message: 'OK' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = { validatePassword };