'use strict';
function max(arr){
    var maxEl;
    var i;
    maxEl = arr[0];
    for(i = 0; i < arr.length; i++){
        if (arr[i] > maxEl){
            maxEl = arr[i];
        }
    }
    console.log(maxEl);
}
module.exports = max;
