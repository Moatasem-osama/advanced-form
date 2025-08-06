

const signUpName = document.getElementById("signUpName");
const signUpEmail = document.getElementById("signUpEmail");
const signUpPassword = document.getElementById("signUpPassword");
const btn = document.getElementById("btn");
let about = JSON.parse(localStorage.getItem("user")) || [];

const regex = {
    regexSignUpName: /^[a-z0-9_-]{3,15}$/,
    regexSignUpEmail: /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/,
    regexSignUpPassword: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
};


btn.addEventListener("click", function signUp() {
    let isNameValid = validateForm(signUpName);
    let isEmailValid = validateForm(signUpEmail);
    let isPasswordValid = validateForm(signUpPassword);

    if (isNameValid && isEmailValid && isPasswordValid) {
        const req = document.getElementById("req");
        req.innerHTML = "";
        if (signUpName.value === "" || signUpEmail.value === "" || signUpPassword.value === "") {
            req.innerHTML = `<p class="text-danger m-3 text-center">All inputs are required</p>`;
        } else {
            if (about.some(user => user.userEmail === signUpEmail.value)) {
                window.alert("Email already exists");
                return;
            }
            const info = {
                userName: signUpName.value, userEmail: signUpEmail.value, userPassword: signUpPassword.value
            };
            about.push(info);
            localStorage.setItem("user", JSON.stringify(about));
            location.href = "../Login/index.html";
        }
    }
});

function validateForm(element) {
    let regexPattern = regex[`regex${element.id.charAt(0).toUpperCase() + element.id.slice(1)}`]
    if (regexPattern && regexPattern.test(element.value)) {
        element.classList.remove("is-invalid");
        element.classList.add("is-valid");
        element.nextElementSibling?.classList.add("d-none");
        return true;
    } else {
        element.classList.add("is-invalid");
        element.classList.remove("is-valid");
        element.nextElementSibling?.classList.remove("d-none");
        return false;
    }
}