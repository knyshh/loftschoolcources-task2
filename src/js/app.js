var app = require("./module/func.js");


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