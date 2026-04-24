const express = require('express');
const app = express();

app.use(express.json());

const validatePassword = (password) => {
    if (typeof password !== 'string') return false;

    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
};

app.get('/health', (req, res) => {
    res.json({ status: 'up' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { validatePassword };