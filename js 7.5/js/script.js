cars = [

    {"name":"Toyota", "price": 12000000, "year": 2015, "volume": 2.2},

    {"name":"Mercedes", "price": 70000000, "year": 2018, "volume": 3.8},

    {"name":"Toyota", "price": 7000000, "year": 2013, "volume": 2.0},

    {"name":"BMW", "price": 11000000, "year": 2011, "volume": 3.0},

    {"name":"Lexus", "price": 60000000, "year": 2017 ,"volume": 5.7}

];


while(true){
var search = parseInt(prompt("INSERT [1] TO SEARCH BY NAME\n INSERT [2] TO SEARCH BY YEAR\n INSERT [3] TO SEARCH BY PRICE\n INSERT [4] TO SEARCH BY VOLUME\n INSERT [5] TO EXIT"));
var count = 0;
if(search == 5) break;
switch(search){
case 1:
    var name = prompt("Enter the name of the car");
    for(var i = 0; i < cars.length; i++){
        if(cars[i].name == name){
            alert("The car is " + cars[i].name + "\n The price is " + cars[i].price + "\n The year is " + cars[i].year + "\n The volume is " + cars[i].volume);
            count++;
        }
        if(i == cars.length - 1 && count == 0) alert("The car is not found");
    }
    break;
case 2:
    var year = parseInt(prompt("Enter the year of the car"));
    for(var i = 0; i < cars.length; i++){
        if(cars[i].year == year){
            alert("The car is " + cars[i].name + "\n The price is " + cars[i].price + "\n The year is " + cars[i].year + "\n The volume is " + cars[i].volume);
            break;
        }
        if(i == cars.length - 1 && count == 0) alert("The car is not found");
    }
    break;

case 3:
    var price = parseInt(prompt("Enter the price of the car"));
    for(var i = 0; i < cars.length; i++){
        if(cars[i].price == price){
            alert("The car is " + cars[i].name + "\n The price is " + cars[i].price + "\n The year is " + cars[i].year + "\n The volume is " + cars[i].volume);
            break;
        }
        if(i == cars.length - 1 && count == 0) alert("The car is not found");
    }
    break;
case 4:
    var volume = parseInt(prompt("Enter the volume of the car"));
    for(var i = 0; i < cars.length; i++){
        if(cars[i].volume == volume){
            alert("The car is " + cars[i].name + "\n The price is " + cars[i].price + "\n The year is " + cars[i].year + "\n The volume is " + cars[i].volume);
            break;
        }
        if(i == cars.length - 1 && count == 0) alert("The car is not found");
    }
    break;


}
}