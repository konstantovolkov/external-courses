'use strict';

var Calculator = {
  
  result: 0,

    add: function f(x) {
        (x === undefined) ? 0 : Calculator.result += x;
        return f
      },

    subtract: function f(x) {
        (x === undefined) ? 0 : Calculator.result -= x;
        return f
      },

    divide: function f(x) {
        (x === undefined) ? 0 : Calculator.result /= x;
        return f
      },

    multiply: function f(x) {
        (x === undefined) ? 0 : Calculator.result *= x;
        return f
      },

    getResult: function (){
        return this.result
      },
    reset: function () {
        this.result = 0
    },
};
module.exports = Calculator