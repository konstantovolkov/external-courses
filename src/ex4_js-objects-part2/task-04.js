'use strict';
function upperFirst(str){
    var strNew = str[0].toUpperCase() + str.slice(1);
    return strNew;  
};
module.exports = upperFirst;
