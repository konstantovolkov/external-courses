'use strict';
function slice(arr, begin, end) {
    var result = [];
    var firstItem = begin;
    var lastItem = end;


    if (end === undefined || end > arr.length) {
        lastItem = arr.length;
    };
    if (begin === undefined) {
        firstItem = 0;
    }
    if (begin < 0) {
        firstItem += arr.length;
    };
    if (end < 0) {
        lastItem += arr.length;
    };
    for (var i = firstItem; i < lastItem; i++) {
        result.push(arr[i]);
    }
    return result;
};
module.exports = slice;
