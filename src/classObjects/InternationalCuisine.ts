/**
 * 国际美食
 */
class InternationalCuisine {
    name: string;//属性 前面省略了`public`关键字
    description: string;

    constructor(name:string, description:string) {//构造函数 实例化时会触发
        this.name = name;
        this.description = description;
    }

    
    getName() : string {
        return this.name
    }

    getDescription() : string {
        return this.description
    }
    
}

export default InternationalCuisine