let api = require('@sogrey/what-to-eat')

var what2eat = new api.WhatToEat();

var cuisine = what2eat.whatToEat();
console.log('本次吃点啥：', cuisine);


let internationalCuisine = what2eat.whatToEat_InternationalCuisine();
console.log('入选国际美食：', internationalCuisine['name'], );
console.log('入选理由：', internationalCuisine['description'], );