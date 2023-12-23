





const branch = parseInt(prompt("Enter the currency option:\n1- Science\n2- Humanitarian subjects\n3- Arts\n4- Sport"));

var subbranch;

switch (branch) {
    case 1:
        subbranch = parseInt(prompt("1- Math\n2- Physics"));
        if (subbranch == 1) {
            alert("You are financer");
        }else{
            alert("You are engineer");
        }
        break;
    case 2:
        subbranch = parseInt(prompt("1- History\n2- Foreign language"));
        if (subbranch == 1) {
            alert("You are historian");
        }
        else{
            alert("You are translator");
        }
        break;
    case 3:
        subbranch = parseInt(prompt("1- Drawing\n2- Singing"));
        if (subbranch == 1) {
            alert("You are painter");
        }
        else{
            alert("You are singer");
        }
        break;
    case 4:
        subbranch = parseInt(prompt("1- Team\n2- Individual"));
        if (subbranch == 1) {
            alert("You are footballer");
        }
        else{
            alert("You are boxer");
        }
        break;
    default:
        console.log("Invalid branch option");
}



