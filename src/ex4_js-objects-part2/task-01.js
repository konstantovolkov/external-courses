/* var obj1 = {a:1, b:2};
var obj = Object.create(obj1) */
'use strict'
function f(prop, obj){
    if (!obj.hasOwnProperty(prop) && prop in obj) return obj[prop];
};
module.exports = f;