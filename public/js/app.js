(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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




},{"./module/func-dz3.js":2,"./module/func.js":3}],2:[function(require,module,exports){
function calculator(firstNumber){
    return {
        sum: function(){
            let res = firstNumber;
            for(let i in arguments){
                res += arguments[i];
            }
            return res;
        },
        dif: function(){
            let res = firstNumber;
            for(let i in arguments){
                res -= arguments[i];
            }
            return res;
        },
        div: function(){
            let res = firstNumber;
            for(let i in arguments){
                if(arguments[i]==0)
                {
                    throw new Error("На 0 делить нельзя!");
                }
                res /= arguments[i];
            }
            return res;
        },
        mul: function(){
            let res = firstNumber;
            for(let i in arguments){
                res *= arguments[i];
            }
            return res;
        },
    }
}
module.exports = { calculator } ;

},{}],3:[function(require,module,exports){
function checkArr(val) {
    if(val.length == 0){
        throw new Error("Пустой массив!");
    }
}

function isNumber(val) {
    return typeof val === 'number';
};

function isAllTrue(source,filterFn) {

    var flag = true;
    checkArr(source);

    for(var i=0; i < source.length; i ++) {

        if(filterFn(source[i]) == false) {
            flag = false;
        }
    }
    return flag;
}

function isSomeTrue(source,filterFn) {
    var flag = false;
    checkArr(source);

    for(var i=0; i < source.length; i ++) {

        if(filterFn(source[i]) == true) {
            return flag = true;
        }
    }
    return flag;
}

module.exports = { isSomeTrue, isAllTrue, isNumber } ;

},{}]},{},[1])