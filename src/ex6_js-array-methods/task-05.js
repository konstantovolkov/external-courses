'use strict';
function map(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        result[i] = callback(arr[i], i, arr);     
    }
    return result;
};
module.exports = map;