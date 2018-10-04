'use strict';
function checkArr(arr)
{
    var result;
    result = '';
    for (var i = 0; i < arr.length; i++)
    {
        result += arr[i] + ', ';
    }
    result += 'число элементов массива ' + arr.length;
    console.log(result);
}
module.exports = checkArr; 