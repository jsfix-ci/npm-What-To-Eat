#!/usr/bin/env node

// 参照：https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html

var _that = require("../index"); // 执行shell脚本
var shell = require("shelljs"); // 执行shell脚本
var argv = require('yargs') // 读取参数
    .usage('Usage: hello [options]')
    .command("morning", "good morning", function (yargs) { // 子命令
        console.log("Good Morning");
    })
    .option('n', {
        alias: 'name', // 别名
        demand: true, // 是否必选
        default: 'tom', // 默认值
        describe: 'your name', // 提示
        type: 'string' // 数据类型
    })
    .option('a', {
        alias: 'age', // 别名
        demand: true, // 是否必选
        default: '18', // 默认值
        describe: 'your age', // 提示
        type: 'int' // 数据类型
    })
    .example('hello -n Tom', 'hello Tom // say hello to Tom')
    .example('hello --n Sogrey --a 18', 'hello Sogrey,18')
    .help('h')
    .alias('h', 'help')
    .epilog('copyright Sogrey')
    .argv;

shell.exec("echo hello " + argv.name + "," + argv.age);
shell.exec("echo hello " + argv.n + "," + argv.a);
// $ hello --name Sogrey --age 18
// or
// $ hello --n Sogrey --a 18
// output:
// > hello Sogrey,18



shell.exec("echo argv._ " + argv._);
// $ hello A --n Sogrey B  --a 18 C
// > argv._ A,B,C



// 测试npm
var path = 'tests/results/test-README.txt';
var data = '测试写入文件数据：说明文档';
_that.writeFile(path, data).then(function (flag) {
    console.log('写入成功？', flag);

    _that.readFile(path).then(function (data) {
        console.log('写入的内容是：', data);
    });
});

// 写入成功？ true
// 写入的内容是： 测试写入文件数据：说明文档

