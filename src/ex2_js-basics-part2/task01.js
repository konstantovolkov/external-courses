use strict;
var f = function(x) {
    var type = typeof x;
    switch(type) {
        case 'number':
            return x + ' is number';
            break;
        case 'string':
            return x + ' is string';
            break;
        default: return x + ' is undefined';
    }
}