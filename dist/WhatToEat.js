"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var WhatToEat = /** @class */ (function () {
    function WhatToEat() {
        this.DishClassification = ['甜点饮品', '火锅', '自助餐', '小吃快餐', '日韩料理', '西餐', '烧烤烤肉', '东北菜', '川湘菜', '江浙菜', '香锅冒菜', '粤港菜', '中式烧烤/烤串', '西北菜', '咖啡酒吧茶馆', '云贵菜', '东南亚菜', '海鲜', '素食', '台湾/客家菜', '创意菜', '汤/粥/炖菜', '蒙餐', '新疆菜', '京菜', '鲁菜'];
    }
    WhatToEat.prototype.test = function () {
        console.log('Hello world!');
    };
    WhatToEat.prototype.whatToEat = function () {
        return this.DishClassification[Math.floor(Math.random() * this.DishClassification.length)];
    };
    return WhatToEat;
}());
exports.default = WhatToEat;
//# sourceMappingURL=WhatToEat.js.map