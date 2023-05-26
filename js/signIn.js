function signIn(
        login = document.getElementById("signInLogin").value,
        password = document.getElementById("signInPassword").value
)
{
    db.collection("profileWorkers").where("Логин", "==", login).get()
    .then(function(querySnapshot) {
        if(querySnapshot.empty){
            db.collection("profileEmployees").where("Логин", "==", login).get()
            .then(function(querySnapshot) {
                if(querySnapshot.empty){
                    alert("Пользователь не найден");
                }else{
                    querySnapshot.forEach(function(doc) {
                        if(doc.data()["Пароль"] == password){
                            // redirect to profile page
                            window.location.href = "профиль.html";
                        }else{
                            alert("Неверный пароль");
                        }
                    });
                }
            })
                .catch(function(error) {
                    console.log("Error getting documents: ", error);
                });
            }else{
                querySnapshot.forEach(function(doc) {
                    if(doc.data()["Пароль"] == password){
                        // redirect to profile page
                        window.location.href = "профиль.html";
                    }else{
                        alert("Неверный пароль");
                    }
                });
            }
        }
        
        )
        .catch(function(error) {
            console.log("Error getting documents: ", error);
        }
    );
}