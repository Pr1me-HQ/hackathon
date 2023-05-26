let prism = document.querySelector(".rec-prism");

function showSignup(){
  prism.style.transform = "translateZ(-100px) rotateY( -90deg)";
}
function showLogin(){
  prism.style.transform = "translateZ(-100px)";
}
function showForgotPassword(){
  prism.style.transform = "translateZ(-100px) rotateY( -180deg)";
}

function showSubscribe(){
  prism.style.transform = "translateZ(-100px) rotateX( -90deg)";
}

function showContactUs(){
  prism.style.transform = "translateZ(-100px) rotateY( 90deg)";
}

function showThankYou(){
  prism.style.transform = "translateZ(-100px) rotateX( 90deg)";
  userProfile = {                     
    "ФИО": document.getElementsByName('username')[0].value,
    "Дата рождения": document.getElementsByName('dateOfBirth')[0].value,
    "Пол": document.getElementsByName('mujik').checked ? "Мужской" : "Женский",
    "Электронная почта": document.getElementsByName('email')[0].value,
    "Языки": Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(function(checkbox) {
              return checkbox.value;
            }),
    "Адрес": document.getElementsByName('address')[0].value,
    "Фото": "",
    "Опыт работы": document.getElementsByName('experience')[0].value,
    "Образование": document.getElementsByName('education')[0].value,
    "Специальность": document.getElementsByName('speciality')[0].value,
    // "Навыки": document.getElementsByName('skills')[0].value,
    "Контакты": document.getElementsByName('contacts')[0].value,
  }

  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  db.collection("profileWorkers").doc(localStorage.getItem("userID")).set(userProfile)
}