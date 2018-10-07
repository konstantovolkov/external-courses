'use strict';
function checkEqual(arr){
    var i = 1;
    var isEqual;
    while (i < arr.length){
        if (arr[i-1] === arr[i]){
            isEqual = true;
        }
        else {
            isEqual = false;
            break;
        }
        i++;
    }
    console.log(isEqual);
}
module.exports = checkEqual;