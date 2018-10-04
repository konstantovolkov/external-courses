'use strict';
function max(arr){
    var maxEl;
    maxEl = arr[0];
    for(var i = 0; i < arr.length; i++){
        if (arr[i] > maxEl){
            maxEl = arr[i];
        }
    }
    console.log(maxEl);
}
module.exports = max;
