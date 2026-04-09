function validatePassword(password) {
    const minLength = password.length >= 8;
    const hasUpper = /[A-Z]/.test(password);
    const hasLower = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecial = /[^A-Za-z0-9]/.test(password);

    return minLength && hasUpper && hasLower && hasNumber && hasSpecial;
}

function check() {
    const password = document.getElementById("password").value;
    const result = document.getElementById("result");

    if (validatePassword(password)) {
        result.innerText = "Successful";
        result.style.color = "green";
    } else {
        result.innerText = "Invalid password";
        result.style.color = "red";
    }
}
