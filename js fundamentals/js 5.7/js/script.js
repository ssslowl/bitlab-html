var speed = parseInt(prompt("Enter speed: "));
var distance = parseInt(prompt("Enter distance: "))
const min = 135;
var time = (distance/speed)*60;

if(time <= min){
    alert("YES, YOU CAN REACH");    
}else{
    alert("NO, YOU CAN NOT REACH");
}