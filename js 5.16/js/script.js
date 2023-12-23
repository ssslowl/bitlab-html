var min = parseInt(prompt('Enter min number'));

var hour = (min / 60).toFixed(0);
    
var min = min % 60;

if(min != 0){
    alert(hour + ' hour(s) ' + min + ' minute(s)');
}else{
    alert(hour + ' hour(s)');
}