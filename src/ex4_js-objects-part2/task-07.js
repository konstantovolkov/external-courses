'use strict';
function shorten(str, shLength) {
    if (shLength < str.length) {
        str = str.slice(0, shLength - 3);
        return str + '…';
    };
    return str;
};
module.exports = shorten;
