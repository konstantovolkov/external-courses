use strict;
var checkArr = function(arr)
{
    var str;
    str = '';
    for (var i = 0; i < arr.length; i++)
    {
        str += arr[i] + ', ';
    }
    str += 'число элементов массива ' + arr.length;
    return str;
}