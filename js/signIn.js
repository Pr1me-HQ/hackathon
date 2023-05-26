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
                            localStorage.setItem("userProfile", JSON.stringify(doc.data()));
                            window.location.href = "профиль.html";
                            console.log(doc.data());
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
                        localStorage.setItem("userProfile", JSON.stringify(doc.data()));
                        console.log(doc.data());
                        window.location.href = "работaдатель.html";
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