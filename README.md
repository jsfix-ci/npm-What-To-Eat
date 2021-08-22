# WhatToEat 
吃点啥

## Install
``` bash
npm i @sogrey/what-to-eat
```
## Usage

``` js
let api = require('@sogrey/what-to-eat')

var what2eat = new api.WhatToEat();

var cuisine = what2eat.whatToEat();
console.log('本次吃点啥：', cuisine);
```

## 命令行使用

``` bash
$ WhatToEat
本次吃点啥： 川湘菜
```