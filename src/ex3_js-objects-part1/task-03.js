'use strict';
function haveProp(str, obj){
    for (var key in obj){
        if (str in obj){
            return true;
        } else{
            return false;
        }
    }
};
module.exports = haveProp;