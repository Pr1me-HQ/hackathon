document.getElementById('auth').innerHTML = localStorage.getItem('userID') ? "Профиль" : "Регистрация";
userType = localStorage.getItem('userType') === "profileEmployees" ? "./работaдатель.html" : "./профиль.html";
document.getElementById('auth').href = localStorage.getItem('userID') ? userType : "./register.html"        