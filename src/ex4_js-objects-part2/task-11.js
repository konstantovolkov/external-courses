'use strict';
function countSymbols(str) {
    var counters = {}
    for (var i = 0; i < str.length; i++) {            
        if (counters[str[i]] === undefined) {
            counters[str[i]] = 1;
        } else {
            counters[str[i]]++
        }
    }
    for (var key in counters){
        console.log(key + ': ' + counters[key]);
    }
};
module.exports = countSymbols;