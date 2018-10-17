'use strict';
function filter(arr, callback) {
    var result = [];
    for (var i = 0; i < arr.length; i++) {
        if (callback(arr[i], i, arr)) {
            result.push(arr[i])
        }
    }
    return result;
};
module.exports = filter;
