// document.querySelector('h1').textContent = `Hi , ${(localStorage.getItem('userName'))} `
// document.getElementById('email') .textContent = `your email : ${localStorage.getItem('userEmail')}`
// document.getElementById('password') .textContent = `your password : ${localStorage.getItem('userPassword')}`

// جلب بيانات المستخدم من localStorage
const userArray = JSON.parse(localStorage.getItem('user'));

if (userArray && userArray.length > 0) {
  const user = userArray[0]; // أول عنصر في المصفوفة

  // عرض الاسم
  document.querySelector('h1').textContent = `Hi, ${user.userName}`;

  // عرض البريد الإلكتروني
  const emailElement = document.getElementById('email');
  emailElement.textContent = `Your Email: ${user.userEmail}`;

  // عرض كلمة المرور (إن كنت محتاج تعرضها)
  const passwordElement = document.getElementById('password');
  passwordElement.textContent = `Your Password: ${user.userPassword}`;

} else {
  console.log("No user data found.");
}

// زر تسجيل الخروج
const logout = document.getElementById('loogout');

logout.addEventListener('click', () => {
  localStorage.clear();
  location.href = '../index.html'; 
});
