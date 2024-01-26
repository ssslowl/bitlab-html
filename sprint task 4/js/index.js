





function register() {

    const fullName = document.getElementById('fullname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const country = document.getElementById('country').value;
    const birthdate = document.getElementById('birthdate').value;

    if (!fullName || !email || !password || !country || !birthdate) {
        alert('Please fill in all required fields.');
        return;
    }

    const user = {
        fullName,
        email,
        password,
        country,
        birthdate
    };

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];

    const isEmailRegistered = existingUsers.some(u => u.email === email);

    if (isEmailRegistered) {
        alert('Email is already registered. Please use a different email.');
        return;
    } else {

        existingUsers.push(user);
        localStorage.setItem('users', JSON.stringify(existingUsers));


        alert('Registration successful! Please log in.');
        window.location.href = 'index.html';
    }
}










function login() {
    const users = JSON.parse(localStorage.getItem("users")) || [];
 
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;


    if (!enteredUsername || !enteredPassword) {
        alert('Please fill in all required fields.');
        return;
    }

    
    const user = users.find(u => u.email === enteredUsername && u.password === enteredPassword);

    if (user) {
        localStorage.setItem("mainUser", JSON.stringify(user));
        alert(`Welcome, ${user.fullName}!`);
        window.location.href = 'profile.html';
    } else {
        alert('Invalid username or password. Please try again.');
    }
}


function clearStorage(){
    alert("local storage cleaned!");
    localStorage.clear();
    

}