'use strict';
function reduce(arr, callback, initialValue) {
    var previousValue;
    var i = 0;
    if (initialValue === undefined) {
        previousValue = arr[i];
        i++;
    } else {
        previousValue = initialValue;
    };
    for (i; i < arr.length; i++) {
        previousValue = callback(previousValue, arr[i], i, arr);
    };
    return previousValue;
};
module.exports = reduce;