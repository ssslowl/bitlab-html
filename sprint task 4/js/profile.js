function getUserData() {
    const userData = JSON.parse(localStorage.getItem('mainUser'));
    return userData || {};
}


function populateProfileFields() {
    const user = getUserData();


    if (user.fullName) {
        document.getElementById('fullname').innerText = user.fullName;
    }

    if (user.email) {
        document.getElementById('email').innerText = user.email;
    }

    if (user.country) {
        document.getElementById('country').innerText = user.country;
    }

    if (user.birthdate) {
        document.getElementById('birthdate').innerText = user.birthdate;
    }
}


function logout() {
    localStorage.removeItem("mainUser");
    window.location.href = 'index.html'
}


window.onload = populateProfileFields;