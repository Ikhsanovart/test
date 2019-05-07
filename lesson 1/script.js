'use strict';

var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true; //true of false
null; //когда чего-то не существует. по сути в коде это ссылка на несуществующую вещь, строка с самфинг (без лет самфинг) 
undefined; //когда какой-либо объект существует, но значения никакого не имеет. лет самфинг, в консоле выводится андефайнд
var obj = {}; //объект - это коллекция данных. это структура, которая используется для хранения любых данных

console.log(4/0);
console.log('string'/0);

let something;
console.log(something);

let persone = {
    name: "John",
    age: "25",
    isMarried: false
};

console.log(persone.name, persone.age);
console.log(persone["name"]);

let arr = ['plum.png', 'orange.jpg', 'apple.bmp'];
console.log(arr[2]);

var hello = 'Hello world!';
var message;
// скопировали значение
message = hello;
alert( hello ); // Hello world!
alert( message ); // Hello world!