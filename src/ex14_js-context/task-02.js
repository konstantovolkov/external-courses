'use strict';
function Hangman(word) {
    this.word = word.toLowerCase();
    this.guessed = [];
    this.errorsLeft = 6;
    this.wrongSymbols = [];
    this.result = '';
    for (var i = 0; i < this.word.length; i++) {
        this.guessed[i] = '_'
    }
    this.guess = function (letter) {
        var position = 0;
        if (this.word.indexOf(letter, position) == -1) {
            this.wrongSymbols.push(letter);
            this.errorsLeft--;
            if (this.errorsLeft !== 0) {
                this.result = 'wrong letter, errors left ' + this.errorsLeft + ' | ' + this.wrongSymbols.join(', ');
            }
            else {
                this.result = 'You lose! | ' + this.word;
            }
        }
        else {
            while (index !== -1) {
                var index = this.word.indexOf(letter, position);
                this.guessed[index] = letter;
                this.result = this.guessed.join('');
                position = index + 1;
            }
        }
        if (this.guessed.join('') === this.word) {
            console.log(this.result = this.word + ' | ' + 'You won!')
        }
        else {
            console.log(this.result);
        }
        return this;
    };
    this.getGuessedString = function () {
        console.log(this.guessed.join(''));
        return this;
    };
    this.getErrorsLeft = function () {
        console.log(this.errorsLeft);
        return this;
    };
    this.getWrongSymbols = function () {
        console.log(this.wrongSymbols);
        return this;
    };
    this.getStatus = function () {
        console.log(this.guessed.join('') + ' | ' + 'errors left' + this.errorsLeft);
    };
    this.startAgain = function (newWord) {
        this.word = newWord.toLowerCase();
        this.guessed = [];
        this.errorsLeft = 6;
        this.wrongSymbols = [];
        this.result = '';
        for (var i = 0; i < this.word.length; i++) {
            this.guessed[i] = '_'
        }
    }
};
module.exports = new Hangman;