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
