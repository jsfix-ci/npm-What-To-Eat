//=========================================
// 单独测试 mocha tests/mocha/WhatToEat.js
//=========================================

var api = require('../../dist/index');
var expect = require('chai').expect;

describe('WhatToEat 吃点啥 功能测试', function () {

    //writeFile功能测试
    describe('WhatToEat', function () {

        it('吃点啥', function () {

            var what2eat = new api.WhatToEat();

            var cuisine = what2eat.whatToEat();
            console.log('本次吃点啥：', cuisine);

            expect(cuisine).not.empty; // 非空
            
        });

    });
});