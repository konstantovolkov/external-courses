'use strict';
class Sweet {
    constructor(name, weight) {
        this.name = name;
        this.weight = weight;
    }
}

class Lollypop extends Sweet {
    constructor(name, weight, color){
        super(name, weight);
        this.color = color;
    }
}

class Chocolate extends Sweet {
    constructor(name, weight, chocType){
        super(name, weight);
        this.chocType = chocType;
    }
}

var alpenGold = new Chocolate('Alpen Gold', 100, 'dark');
var ritter = new Chocolate('Ritter Sport', 120, 'milky');
var bigLP = new Lollypop('Big Lollypop', 50, 'red');
var smallLP = new Lollypop('Small Lollypop', 15, 'green');

class Gift {
    constructor (giftName) {
        this.giftName = giftName;
        this.giftWeight = 0;
        this.sweets = [];
    }

    addSweet (sweet) {
        this.sweets.push(sweet);
        this.giftWeight += sweet.weight;
        return this;
    }

    sortByWeight () {
        this.sweets.sort(
            function(a, b) {
                if (a.weight < b.weight) return -1;
                if (a.weight > b.weight) return 1;
                return 0;
            }
        );
    }

    findByName(search) {
        var resume = '';
        this.sweets.forEach(
            function (item) {
                if (item.name.toLowerCase() === search.toLowerCase()) {
                    for (var key in item) {
                        resume += item[key] + ' ';
                    }
                    resume += '\n';
                }
            }
        );
        return resume;
    }

    lookInside() {
        var resume = 'New Year Gift: ' + this.giftName + '\nWeight: '+ this.giftWeight + '\nWhat\'s inside:' ;
        this.sweets.forEach(
            function (item) {
                for (var key in item) {
                    resume += item[key] + ' ';
                }
            }
        );
        return resume;
    }
}

var gift = new Gift('for Kosteek');
gift.addSweet(alpenGold).addSweet(ritter).addSweet(bigLP).addSweet(smallLP);
gift.sortByWeight();
console.log(gift.lookInside());
console.log(gift.findByName('ritter sport'));