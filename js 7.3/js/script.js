const numbers = [];

while (true) {
    input = parseFloat(prompt("Введите число:"));
    if (input == 0) {
        break;
    }else{
    numbers.push(input);
    }
}

res = [];

for(let i = 0; i < numbers.length; i++){
    if(numbers[i] > 0){
        res.push(numbers[i]);
    }
}

alert(res);