'use strict';
function checkArr(arr)
{
    var result;
    var i;
    result = '';
    for (i = 0; i < arr.length; i++)
    {
        result += arr[i] + ', ';
    }
    result += 'число элементов массива ' + arr.length;
    console.log(result);
}
module.exports = checkArr; 