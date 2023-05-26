function signOut() {
    firebase.auth().signOut().then(function() {
        // Sign-out successful.
        window.location.href = "index.html";
        localStorage.clear();
    }).catch(function(error) {
        // An error happened.
    });
}