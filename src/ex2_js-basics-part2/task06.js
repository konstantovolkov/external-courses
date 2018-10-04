'use strict';
function isSimple(n){
    var i = 2;
    var j = 0;
    if (n > 1000){
        console.log('Данные неверны');
    } else{
        while ((i*i <= n)  && (j !== 1)){
            if (n % i === 0){
                j = 1;
            }
            i++;
        }
        if (j === 1){
            console.log(`Число ${n} - составное число`);
        } else{
            console.log(`Число ${n} - простое число`);
        }
    }
}
module.exports = isSimple;