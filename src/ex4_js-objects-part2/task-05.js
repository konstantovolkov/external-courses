'use strict';
function searchSub(str, subStr){
    if (~str.indexOf(subStr)) return true;
    return false;
};
module.exports = searchSub;