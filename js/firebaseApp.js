// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8fJrprUgps-jTmTEyY5Fiszg4n_CQblI",
  authDomain: "myguide-ff65d.firebaseapp.com",
  databaseURL: "https://myguide-ff65d-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "myguide-ff65d",
  storageBucket: "myguide-ff65d.appspot.com",
  messagingSenderId: "914293441355",
  appId: "1:914293441355:web:41cd9cb9a1a04b68a7dece",
  measurementId: "G-QQPEC6938Q"
};

console.log(localStorage.getItem("userID"));

var verificationId, verificationCode;

firebase.initializeApp(firebaseConfig);
  
var db = firebase.firestore();

function addJob(
    name = document.getElementById("name").value,
    description = document.getElementById("description").value,
    payment = document.getElementById("salary").value,
    experience = document.getElementById("experience").value,
    time = document.getElementById("time").value,
    userID = localStorage.getItem("userID"),
    deadline = document.getElementById("deadline").value
){
    db.collection("jobs").add({
        "Позиция": name,
        "Оплата": payment,
        "Описание": description,
        "Дедлайн": deadline,
        "Опыт": experience,
        "Время": time,
        "ID работодателя": userID
    })
    .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
        // window.location.href = "работaдатель.html";
    })
    .catch(function(error) {
        console.error("Error adding document: ", error);
    });

    // close modal bootstrap
    $('#addJobModal').modal('hide');
}

function getJobs(jobsContainer = document.getElementById("jobsContainer")) {
    db.collection("jobs").get().then((querySnapshot) => {
      var table = document.createElement("table");
      table.classList.add("table");
  
      var tableHead = document.createElement("thead");
      var tableHeadRow = document.createElement("tr");
      tableHeadRow.innerHTML = `
        <th scope="col">Позиция</th>
        <th scope="col">Зарплата</th>
        <th scope="col">Описание</th>
        <th scope="col">Опыт</th>
        <th scope="col">Время</th>
        <th scope="col">Дедлайн</th>
      `;
  
      tableHead.appendChild(tableHeadRow);
      table.appendChild(tableHead);
  
      var tableBody = document.createElement("tbody");
  
      querySnapshot.forEach((doc) => {
        var jobData = doc.data();
  
        var tableRow = document.createElement("tr");
        if (jobData["ID работодателя"] === localStorage.getItem("userID"))
          tableRow.innerHTML =  `
            <td>${jobData["Позиция"]}</td>
            <td>${jobData["Оплата"]}</td>
            <td>${jobData["Описание"]}</td>
            <td>${jobData["Опыт"]}</td>
            <td>${jobData["Время"]}</td>
            <td>${jobData["Дедлайн"]}</td>
            <td><button class="btn btn-primary" onclick="getJob('${doc.id}')">
              Посмотреть отклики
            </button></td> : 
          }`;
  
        tableBody.appendChild(tableRow);
      });
  
      table.appendChild(tableBody);
      jobsContainer.appendChild(table);
    });
}

function getJob(jobID) {
  db.collection("jobs").doc(jobID).get().then((doc) => {
    var jobData = doc.data();
    // open getJobModal bootstrap and get 'Отклики' from database
    $('#getJobModal').modal('show');
    console.log(jobData["Отклики"]);
    jobData["Отклики"].forEach((response) => {
      console.log(response);
      var responseContainer = document.getElementById("responsesContainer");
      var responseDiv = document.createElement("div");
      responseDiv.classList.add("card");
      responseDiv.classList.add("mb-3");
      responseDiv.innerHTML = `
        <div class="card-body">
          <h5 class="card-title">${response["Имя"]}</h5>
          <p class="card-text">${response["Комментарий"]}</p>
          <p class="card-text">${response["Время"]}</p>
          <p class="card-text">${response["Оценка"]}</p>
        </div>
      `;
      responseContainer.appendChild(responseDiv);
    })
  })
}

function addResponse(jobID) {
  var name = document.getElementById("name").value;
  var comment = document.getElementById("comment").value;
  var time = document.getElementById("time").value;
  var mark = document.getElementById("mark").value;

  db.collection("jobs").doc(jobID).update({
    "Отклики": firebase.firestore.FieldValue.arrayUnion({
      "Имя": name,
      "Комментарий": comment,
      "Время": time,
      "Оценка": mark
    })
  })
  .then(function() {
    console.log("Document successfully updated!");
    $('#addResponseModal').modal('hide');
  })
  .catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
  });
}
  