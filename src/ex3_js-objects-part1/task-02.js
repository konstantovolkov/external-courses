'use strict';
function byPass(obj){
    for (var key in obj){
        console.log('Ключ: ' + key + ', значение: ' + obj[key]);
    }
};
module.exports = byPass;
