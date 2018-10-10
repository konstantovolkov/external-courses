'use strict';
function deepClone(obj){
    var clone; 
    if (obj.constructor === Array){
        clone = [];
    } else{
        clone = {}
    }
    for (let key in obj){
        if (typeof(obj[key]) === 'object'){
            clone[key] = deepClone(obj[key]);
        } else{
            clone[key] = obj[key];
        }
    }
    return clone;
}
module.exports = deepClone;
