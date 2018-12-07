'use strict';

function Device(name, power) {
    this.name = name;
    this.power = power;
    this.enabled = false;
}
Device.prototype.enable = function () {
    this.enabled = true;
}
Device.prototype.disable = function () {
    this.enabled = false;
}

function Tv(name, power) {
    Device.apply(this, arguments);
}
Tv.prototype = Object.create(Device.prototype);

function Oven(name, power) {
    Device.apply(this, arguments);
}

Oven.prototype = Object.create(Device.prototype);

Oven.prototype.heatUp = function() {
    if (this.enabled) {
        console.log('Подогрели покушать')
    } else {
        console.log('Надо включить '+ this.name + ' в сеть')
    }
}

var tv = new Tv('Телек', 200);
var oven = new Oven('Микроволновка', 800);

oven.enable();
oven.heatUp();

function Room(roomName) {
    this.devices = [];
    this.totalPower = 0;
    this.roomName = roomName;
}

Room.prototype.addDevice = function(device) {
    this.devices.push(device);
    this.totalPower += device.power;
    console.log('Подключили прибор ' + device.name + ', потребление энергии в комнате ' + this.totalPower);
    return (this)
}

var room = new Room('Комната');

room.addDevice(tv).addDevice(oven);

Room.prototype.searchByName = function(search) {
    var result = '';
        this.devices.forEach(
            function (item) {
                if (item.name.toLowerCase() === search.toLowerCase()) {
                   result += `Прибор ${item.name} мощностью ${item.power} Вт \n`;
                }
            }
        )
        console.log(result)
}

room.searchByName('телек');

room.searchByName('Микроволновка')