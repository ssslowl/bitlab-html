
const usdRate = 380;
const eurRate = 430;
const gbpRate = 480;


const amountInKZT = parseFloat(prompt("INSERT YOUR AMOUNT IN KZT:"));


const currencyOption = parseInt(prompt("Enter the currency option:\n1- CONVERT TO USD\n2- CONVERT TO EUR\n3- CONVERT TO GBP"));

let convertedAmount;


switch (currencyOption) {
    case 1:
        convertedAmount = amountInKZT / usdRate;
        break;
    case 2:
        convertedAmount = amountInKZT / eurRate;
        break;
    case 3:
        convertedAmount = amountInKZT / gbpRate;
        break;
    default:
        console.log("Invalid currency option");
}


alert("Converted amount: " + convertedAmount.toFixed(2));
