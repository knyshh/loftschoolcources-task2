var app = require("./module/func.js");
var app2 = require("./module/func-dz3.js");


var myCalculator = app2.calculator(100);

console.log(myCalculator.sum(1, 2, 3)); //вернет 106
console.log(myCalculator.dif(10, 20)); //вернет 70
console.log(myCalculator.div(2, 2)); //вернет 25
console.log(myCalculator.mul(2, 2)); //вернет 400

console.log('_____ _____');

var allNumbers = [1, 2, 4, 5, 6, 7, 8],
    someNumbers = [1, 2, 'привет', 4, 5, 'loftschool', 6, 7, 8],
    noNumbers = ['это', 'массив', 'без', 'чисел'],
    noArr= [];

console.log(app.isAllTrue(allNumbers, app.isNumber));
console.log(app.isAllTrue(someNumbers, app.isNumber));
console.log(app.isAllTrue(noNumbers, app.isNumber));

console.log('_____ _____');

console.log(app.isSomeTrue(allNumbers, app.isNumber));
console.log(app.isSomeTrue(someNumbers, app.isNumber));
console.log(app.isSomeTrue(noNumbers, app.isNumber));

console.log(app.isSomeTrue(noArr, app.isNumber));
console.log(app.isAllTrue(noArr, app.isNumber));



