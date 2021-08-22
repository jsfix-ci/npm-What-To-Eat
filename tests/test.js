const api = require('../dist/index')

console.log(api)

var what2eat = new api.WhatToEat();

var cuisine = what2eat.whatToEat();
console.log('本次吃点啥：', cuisine);