'use strict';
function insertSubstr(str, strToIns, pos) {
    var newStr = '';
    var counter = -1;
    for (var i = 0; i < str.length; i++) {
        newStr += str[i]
        if (str[i] === ' ') {
            counter++;
            if (counter === pos) { 
            newStr += strToIns + ' ';           
            }
        }
    }
    return newStr;
}
module.exports = insertSubstr;
