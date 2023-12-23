var wiskas = parseInt(prompt("enter the num of wiskas"));

var cost = wiskas * 120;

alert("main cost: " + cost);
if(cost >= 4000){
    alert("You need to pay " + (cost*0.9));
    alert("it worked")
}else{
    alert("You need to pay " + cost);
}