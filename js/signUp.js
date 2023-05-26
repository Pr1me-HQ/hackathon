var provider = new firebase.auth.PhoneAuthProvider();
var signUpButton = document.getElementById('sign-up-button');


function startTimer(duration, display) {
    var signUpButton = document.getElementById('sign-up-button');
    var timer = duration, minutes, seconds;
    var interval = setInterval(function () {
          minutes = parseInt(timer / 60, 10);
          seconds = parseInt(timer % 60, 10);
      
          minutes = minutes < 10 ? "0" + minutes : minutes;
          seconds = seconds < 10 ? "0" + seconds : seconds; 
      
          display.textContent = minutes + ":" + seconds;
      
          if (--timer < 0) {
              timer = duration;
              clearInterval(interval);
              signUpButton.innerHTML = "Отправить код повторно";
              signUpButton.onclick = function() {
                signUp();
              }
          }
      }, 1000);
}
    
function signUp(
    userPhoneNumber = document.getElementById('phoneNumber').value,  
    login = document.getElementById('login').value,
    password = document.getElementById('password').value,
    type = document.getElementById('card_one').checked ? "worker" : "employee"
)
{
    provider.verifyPhoneNumber('+992' + userPhoneNumber, applicationVerifier)
        .then(function(verificationId) {
          var verificationId = verificationId;
          // after sending sms code to user phone wait for user to enter code
          document.getElementById('verificationCode').disabled = false;
          signUpButton.innerHTML = "Войти"; 

          startTimer(60, document.getElementById('timer'));

    console.log(userPhoneNumber, login, password, type);
          signUpButton.onclick = function() {
            console.log("signUpButton clicked");
              code = document.getElementById('verificationCode').value;
                var credential = firebase.auth.PhoneAuthProvider.credential(verificationId, code);
                firebase.auth().signInWithCredential(credential) 
                .then(function(data) {
                    userID = data.user.uid
                    // if user is successfully signed in 
                    localStorage.setItem("userID", userID);
                    localStorage.setItem("userType", type == "worker" ? "profileWorkers" : "profileEmployees");
                    db.collection(type == "worker" ? "profileWorkers" : "profileEmployees").doc(userID).set({
                        "Номер телефона": userPhoneNumber,
                        "Логин": login,
                        "Пароль": password,
                        "ФИО": "",
                        "Дата рождения": "",
                        "Пол": "",
                        "Электронная почта": "",
                        "Адрес": "",
                        "Языки": "",
                        "О себе": "",
                        "Фото": "",
                        "Опыт работы": "",
                        "Образование": "",
                        "Сертификаты": "",
                        "Навыки": "",
                        "Портфолио": "",
                    }, {merge: true})
                    .then(function(docRef) {
                        console.log("Document written with: ", docRef);
                        // redirect to profile page
                        // window.location.href = "form.html";
                    })    
                            .catch(function(error) {
                                console.log("Error getting documents: ", error);
                            })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                    }
                )
            })
        }
    })
}