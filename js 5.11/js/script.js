
var year = prompt("Enter the year:");


if(year % 4 == 0 && year % 100 != 0 || year % 400 == 0){
    alert("YES");
} else{
    alert("NO");
}