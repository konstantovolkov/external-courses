'use strict';
function f(x) {
   // var type = typeof x;
    switch(typeof x)
    {
        case 'number':
            return x + ' is number';
            break;
        case 'string':
            return x + ' is string';
            break;
        default: return x + ' is undefined';
    }
};
module.exports = f;