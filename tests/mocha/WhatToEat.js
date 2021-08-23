//=========================================
// 单独测试 mocha tests/mocha/WhatToEat.js
//=========================================

var api = require('../../dist/index');
var expect = require('chai').expect;

describe('WhatToEat 吃点啥 功能测试', function () {

    describe('WhatToEat', function () {

        it('吃点啥', function () {

            var what2eat = new api.WhatToEat();

            var cuisine = what2eat.whatToEat();
            console.log('本次吃点啥：', cuisine);

            expect(cuisine).not.empty; // 非空

        });

    });

    describe('whatToEat_InternationalCuisine', function () {

        it('国际美食', function () {

            var what2eat = new api.WhatToEat();
            let internationalCuisine = what2eat.whatToEat_InternationalCuisine();
            console.log('入选国际美食：', internationalCuisine['name'], );
            console.log('入选理由：', internationalCuisine['description'], );

            expect(internationalCuisine).be.instanceOf(api.InternationalCuisine);

        });

    });
});