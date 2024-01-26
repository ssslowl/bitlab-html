usernames = ['john', 'sarah', 'adam', 'oliver'];

emails = {'john': 'john@gmail.com', 'sarah': 'sarah@gamil.com', 'adam': 'adam@hmail.com', 'oliver': 'oliver@gmail.com'};

passwords = {'john': 'john123', 'sarah': 'sarah123', 'adam': 'adam123', 'oliver': 'oliver123'};



username = document.getElementById("name");
email = document.getElementById("email");
password = document.getElementById("password");

usernameform = document.getElementById("nameform");
emailform = document.getElementById("emailform");
passwordform = document.getElementById("passwordform");

let error = document.createElement("p");
error.setAttribute("class", "alert alert-danger");



function CreateError(formname, errorname, errormessage){
    let error = document.createElement("p");
    error.setAttribute("class", "alert alert-danger");
    error.setAttribute("id", errorname);
    error.innerHTML = errormessage;
    formname.appendChild(error);
}



function hasElement(array, aim){
    for(let i in array){
        if(array[i] == aim){
            return true;
        }
    }

    return false;
}



function login(){
    let errors = document.getElementsByClassName("alert");

    for(let i = 0; i < errors.length; i++){
        console.log(errors);
        console.log(errors[i]);
        errors[i].remove();
    }





    if(username.value == ""){
        CreateError(usernameform, "userEmpty", "username is empty!");
    }else if(usernames.indexOf(username.value) != -1){
        CreateError(usernameform, "userExist", "username is already taken!")
    }

    if(email.value == ""){
        CreateError(emailform, "emailEmpty", "email is empty!");
        
    }else if(email.value.indexOf("@") == -1 || email.value.indexOf(".") == -1 || email.value.indexOf(".") == (email.value.length-1)){
        CreateError(emailform, "invalidEmail", "email is invaild!");
    }else if(hasElement(emails, email.value)){
        CreateError(emailform, "existingEmail", "email is already in use!");
    }
}


