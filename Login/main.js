let about = [];
about = JSON.parse(localStorage.getItem('user') || []);
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPassword');
const loginButton = document.getElementById('loginButton');
const req = document.getElementById('req')
loginButton.addEventListener('click' , ()=>{
    if (loginEmail.value === '' || loginPassword.value==='') {
      req.innerHTML = `<p class="text-danger m-3 text-center">All inputs are required</p>`;   
    }else{
        let isValid = false;
        for (let i = 0; i < about.length; i++) {
           if (about[i].userEmail == loginEmail.value && about[i].userPassword == loginPassword.value) {
            let userName = about[i].userName;
            let userEmail = about[i].userEmail;
            let userPassword = about[i].userPassword;

            localStorage.setItem('userName' , userName);
            localStorage.setItem('userEmail' , userEmail);
            localStorage.setItem('userPassword' , userPassword);
            location.href = '../hello/index.html';
            isValid = true;
            break;
           }
        }if (!isValid) {
            requiredInput.innerHTML = `<p class="text-danger m-3 text-center">Invalid email or password</p>`;
        }
    }
})
