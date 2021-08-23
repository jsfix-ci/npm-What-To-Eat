#!/usr/bin/env node

'use strict';
// 参照：https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html

var api = require("../dist/index"); // 执行shell脚本
var shell = require("shelljs"); // 执行shell脚本
var argv = require('yargs') // 读取参数
    .usage('Usage: WhatToEat [options]')
    // .option('n', {
    //     alias: 'name', // 别名
    //     demand: true, // 是否必选
    //     default: 'tom', // 默认值
    //     describe: 'your name', // 提示
    //     type: 'string' // 数据类型
    // })
    // .option('a', {
    //     alias: 'age', // 别名
    //     demand: true, // 是否必选
    //     default: '18', // 默认值
    //     describe: 'your age', // 提示
    //     type: 'int' // 数据类型
    // })
    // .example('hello -n Tom', 'hello Tom // say hello to Tom')
    // .example('hello --n Sogrey --a 18', 'hello Sogrey,18')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright Sogrey')
    .argv;

var what2eat = new api.WhatToEat();

var cuisine = what2eat.whatToEat();
// shell.exec("echo 本次吃点啥： " + cuisine,{encoding:'utf8'});
console.log("本次吃点啥： " + cuisine);


let internationalCuisine = what2eat.whatToEat_InternationalCuisine();
console.log('入选国际美食：', internationalCuisine['name'], );
console.log('入选理由：', internationalCuisine['description'], );





