let prism = document.querySelector(".rec-prism");
console.log(localStorage.getItem("userID"));

var data = {
  "data": [
    {
      "id": 1,
      "company": "ООО Альфа-Компания",
      "position": "Программист",
      "description": "Ведущая IT-компания «Альфа-Компания» приглашает опытных программистов в свою команду...",
      "salary": 80000,
      "responses": {
        "Иван Иванов": {
          "comment": "Отличные условия работы и интересные проекты.",
          "rating": 4
        },
        "Анна Петрова": {
          "comment": "Профессиональная команда и хороший коллектив.",
          "rating": 5
        }
      }
    },
    {
      "id": 2,
      "company": "ЗАО ГлобалТехнологии",
      "position": "Аналитик данных",
      "description": "Ведущая компания по анализу данных «ГлобалТехнологии» ищет опытных аналитиков...",
      "salary": 60000,
      "responses": {
        "Михаил Смирнов": {
          "comment": "Интересные проекты и развитие в сфере аналитики.",
          "rating": 4
        },
        "Екатерина Иванова": {
          "comment": "Гибкий график работы и хорошие возможности карьерного роста.",
          "rating": 5
        }
      }
    },
    {
      "id": 3,
      "company": "ООО Инновационные Технологии",
      "position": "Менеджер по маркетингу",
      "description": "Инновационная компания «Инновационные Технологии» ищет опытного менеджера по маркетингу...",
      "salary": 70000,
      "responses": {
        "Александра Сидорова": {
          "comment": "Увлекательные маркетинговые кампании и отличный коллектив.",
          "rating": 4
        },
        "Дмитрий Козлов": {
          "comment": "Возможности для творчества и развития карьеры.",
          "rating": 5
        }
      }
    },
    {
      "id": 4,
      "company": "ООО Прогрессивные Решения",
      "position": "Web-дизайнер",
      "description": "Компания «Прогрессивные Решения» приглашает талантливых веб-дизайнеров...",
      "salary": 50000,
      "responses": {
        "Алина Карпова": {
          "comment": "Интересные проекты и хороший коллектив.",
          "rating": 4
        },
        "Максим Соловьев": {
          "comment": "Креативная атмосфера и разнообразные задачи.",
          "rating": 5
        }
      }
    },
    {
      "id": 5,
      "company": "ЗАО Инновационные Разработки",
      "position": "Инженер-конструктор",
      "description": "Компания «Инновационные Разработки» ищет опытных инженеров-конструкторов...",
      "salary": 75000,
      "responses": {
        "Владимир Петров": {
          "comment": "Интересные проекты и профессиональный рост.",
          "rating": 4
        },
        "Елена Смирнова": {
          "comment": "Отличный коллектив и возможности для самореализации.",
          "rating": 5
        }
      }
    },
    {
      "id": 6,
      "company": "ОАО Финансовые Услуги",
      "position": "Финансовый аналитик",
      "description": "Крупная компания «Финансовые Услуги» ищет опытных финансовых аналитиков...",
      "salary": 90000,
      "responses": {
        "Андрей Игнатов": {
          "comment": "Высокая заработная плата и интересные проекты.",
          "rating": 4
        },
        "Ольга Новикова": {
          "comment": "Профессиональный рост и стабильность работы.",
          "rating": 5
        }
      }
    },
    {
      "id": 7,
      "company": "ООО ТехноСервис",
      "position": "Системный администратор",
      "description": "Компания «ТехноСервис» приглашает опытных системных администраторов...",
      "salary": 60000,
      "responses": {
        "Алексей Соколов": {
          "comment": "Интересные проекты и хороший коллектив.",
          "rating": 4
        },
        "Мария Кузнецова": {
          "comment": "Возможности для развития и профессионального роста.",
          "rating": 5
        }
      }
    },
    {
      "id": 8,
      "company": "ООО Строительные Решения",
      "position": "Инженер-строитель",
      "description": "Строительная компания «Строительные Решения» ищет опытных инженеров-строителей...",
      "salary": 70000,
      "responses": {
        "Глеб Морозов": {
          "comment": "Интересные проекты и хорошая команда.",
          "rating": 4
        },
        "Екатерина Лебедева": {
          "comment": "Возможности для профессионального роста и карьерного развития.",
          "rating": 5
        }
      }
    },
    {
      "id": 9,
      "company": "ОАО Медицинские Технологии",
      "position": "Медицинская сестра",
      "description": "Медицинская компания «Медицинские Технологии» ищет опытных медицинских сестер...",
      "salary": 40000,
      "responses": {
        "Татьяна Иванова": {
          "comment": "Хороший коллектив и возможности для развития.",
          "rating": 4
        },
        "Александр Смирнов": {
          "comment": "Стабильная работа и благодарные пациенты.",
          "rating": 5
        }
      }
    },
    {
      "id": 10,
      "company": "ООО Туристические Путешествия",
      "position": "Менеджер по туризму",
      "description": "Компания «Туристические Путешествия» приглашает опытных менеджеров по туризму...",
      "salary": 50000,
      "responses": {
        "Наталья Козлова": {
          "comment": "Интересные путешествия и хороший коллектив.",
          "rating": 4
        },
        "Игорь Петров": {
          "comment": "Гибкий график работы и возможности для карьерного роста.",
          "rating": 5
        }
      }
  }
]
};

// Отправка данных в Firebase
data.data.forEach(function(vacancy) {
  db.collection("jobs").doc(String(vacancy.id)).set(vacancy)
    .then(function() {
      console.log("Данные успешно отправлены в Firebase Firestore.");
    })
    .catch(function(error) {
      console.error("Ошибка при отправке данных в Firebase Firestore: ", error);
    });
});


// Set the values of other spans as needed


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
    "О себе": document.getElementsByName('about')[0].value,
    "Контакты": document.getElementsByName('contacts')[0].value,
  }

  localStorage.setItem("userProfile", JSON.stringify(userProfile));

  db.collection("profileWorkers").doc(localStorage.getItem("userID")).set(userProfile)
  .then(function() {
    // after 5 seconds redirect to профиль.html
    setTimeout(function(){
      window.location.href = "профиль.html";
    }
    , 3000);
  })
}