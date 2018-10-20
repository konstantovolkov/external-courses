'use strict';
function lowerCamelCase(str) {
    var newStr = '';
    newStr += str[0].toLowerCase();
    for (var i = 1; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        } else {
            i++;
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
}
module.exports = lowerCamelCase;
