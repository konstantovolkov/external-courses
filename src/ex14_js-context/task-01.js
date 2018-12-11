'use strict';
var Сalculator = {
    res: 0,
    add: function (num=undefined) {
        if (num) {
            this.res += num;
        }
        return this

    },
    multiply: function (num) {
        if (num) {
            this.res *= num;
        }
        return this
    },
    divide: function (num) {
        if (num) {
            this.res /= num;
        }
        return this
    },
    subtract: function (num) {
        if (num) {
            this.res -= num;
        }
        return this
    },
    setState: function(num) {
        if (num) {
            this.res = num;
        }
        return this
    },
    reset: function () {
        this.res = 0;
        return this
    },
    getResult: function () {
        return this.res
    },
    fetchData: function(callback) {
        this.res = 500;
        callback(this.getResult());
        return this;
    }
};

module.exports = Сalculator;
