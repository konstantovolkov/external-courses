'use strict';
function countEvenOdd(arr)
{
    var cEven = 0;
    var cOdd = 0;
    var cZero = 0;
    var resString;
    var resArr;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            if (arr[i] % 2 === 0) cEven++; else cOdd++;
        }
        else {
            cZero++;
        }
    }
    resString = 'четных: ' + cEven +'; нечетных: ' + cOdd;
    if (cZero !== 0) {
        resString += '; нулей: ' + cZero;
    }
    resArr = [cEven, cOdd, cZero];
    console.log(resString);
    console.log(resArr);
}
module.exports = countEvenOdd;