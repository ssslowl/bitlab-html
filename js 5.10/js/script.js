
const deflogin = "Yerassyl";
const defpassword = "12345678";


const login = prompt("Enter ypur login:");
const password = prompt("Enter your password:");



if (login === deflogin && password === defpassword) {
    alert("Welcome, " + login);
}else{
    alert("Invalid login or password");
}   