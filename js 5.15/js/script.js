const USDrate = 380;
var tenge = parseInt(prompt("Введите сумму в тенге"));

var USD = tenge / USDrate;
var cent= (USD*100)%100;
USD = USD.toFixed(0);
if(cent!=0){
alert("Ваша сумма в долларах: " + parseInt(USD) + " USD и " + parseInt(cent) + " cent");
}else{
    alert("Ваша сумма в долларах: " + parseInt(USD) + " USD");
}