const express = require('express');
const app = express();

app.use(express.json());

const validatePassword = (password) => {
    // Implement password validation logic here
    return password.length >= 8; // Example validation
};

app.get('/health', (req, res) => {
    res.json({ status: 'up' });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = { validatePassword };