'use strict';
function copyObj(obj){
    let copy = {};
    for(let key in obj){
        copy[key] = obj[key];
    }
    return copy;
}
module.exports = copyObj;