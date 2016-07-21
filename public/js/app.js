(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
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
},{"./module/func.js":2}],2:[function(require,module,exports){
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