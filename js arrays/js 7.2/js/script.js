const numbers = [];

while (true) {
    input = parseFloat(prompt("Введите число:"));
    if (input == 0) {
        break;
    }else{
    numbers.push(input);
    }
}

let product = 1;
for (let i = 0; i < numbers.length; i++) {
    product *= numbers[i];
}

const geometricMean = Math.pow(product, 1 / numbers.length);
alert("Геометрическая средняя: " + geometricMean);
