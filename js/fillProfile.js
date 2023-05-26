var userProfileData = localStorage.getItem("userProfile");
var userProfile = JSON.parse(userProfileData);

var usernameSpan = document.getElementById("username");
var contactsSpan = document.getElementById("contacts");
var dateOfBirthSpan = document.getElementById("dateOfBirth");
var genderSpan = document.getElementById("gender");
var emailSpan = document.getElementById("email");
var languagesSpan = document.getElementById("languages");
var addressSpan = document.getElementById("address");
var experienceSpan = document.getElementById("experience");
// Add spans for other properties as needed

// Set the values of the spans using the corresponding properties from the userProfile object
usernameSpan.innerHTML = userProfile["ФИО"];
dateOfBirthSpan.textContent = userProfile["Дата рождения"];
genderSpan.textContent = userProfile["Пол"];
emailSpan.textContent = userProfile["Электронная почта"];
languagesSpan.textContent = userProfile["Языки"].join(", ");
addressSpan.textContent = userProfile["Адрес"];
contactsSpan.textContent = userProfile["Контакты"];
experienceSpan.textContent = userProfile["Опыт работы"];