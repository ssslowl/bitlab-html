students=[];
while(true){
    insert = parseInt(prompt("PRESS 1 TO ADD STUDENT\n PRESS 2 TO LIST STUDENT\n PRESS 0 TO EXIT"));    
    if(insert == 0){
        alert("BYE");
        break;
    }

    if(insert == 1){
        var name = prompt("INSERT NAME");
        var surname = prompt("INSERT SURNAME");
        var gpa = parseFloat(prompt("INSERT GPA"));
        var student = {
            name: name,
            surname: surname,
            gpa: gpa
        };
        students.push(student);
    }else if(insert == 2){
        var res = "";
        for(var i = 0; i < students.length; i++){
            res += "Name: " + students[i].name + " Surname: " + students[i].surname + " GPA: " + students[i].gpa + "\n";
        }

        alert(res);
    }


}