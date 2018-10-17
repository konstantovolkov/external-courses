'use strict';

var Calculator = {
  
  a: 0,

    add: function f(b) {
        (b === undefined) ? 0 : Calculator.a += b;
        return f
      },

    subtract: function f(b) {
        (b === undefined) ? 0 : Calculator.a -= b;
        return f
      },

    divide: function f(b) {
        (b === undefined) ? 0 : Calculator.a /= b;
        return f
      },

    multiply: function f(b) {
        (b === undefined) ? 0 : Calculator.a *= b;
        return f
      },

    getResult: function (){
        return this.a
      },
    reset: function () {
        this.a = 0
    },
};
module.exports = Calculator
