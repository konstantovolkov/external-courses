'use strict';
function addProp(str, obj){
    for (var key in obj){
        if (str in obj){
            return obj;
        } else{
            obj[str] = 'new';
            return obj;
        }
    }
}
module.exports = addProp;
