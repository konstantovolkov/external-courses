'use strict';
function camelize(str){
    var newStr = '';
    newStr += str[0].toUpperCase();
    for (var i = 1; i < str.length; i++) {
        if (str[i] !== ' ') {
            newStr += str[i];
        } else {
            newStr += str[i];
            i++;
            newStr += str[i].toUpperCase();
        }
    }
    return newStr;
};
module.exports = camelize;
