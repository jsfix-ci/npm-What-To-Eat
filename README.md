# What To Eat
吃点啥

## 编译
``` bash
npm run build
```
## Install
``` bash
npm i @sogrey/what-to-eat
```
## Usage

``` js
const api = require('../dist/index')

console.log(api)

var what2eat = new api.WhatToEat();

var cuisine = what2eat.whatToEat();
console.log('本次吃点啥：', cuisine);
```

## 命令行使用

``` bash
$ WhatToEat
本次吃点啥： 川湘菜
```