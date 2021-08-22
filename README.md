# NodePackageTemplate
npm 包模板

## 注册npm账户

前往[官网](https://www.npmjs.com/)注册账号,记住用户名、密码、邮箱。

## 添加账户
使用以下命令添加npm的账户名、密码和邮箱即可：
``` bash
npm adduser
```
> 如果遇到使用了taobao镜像源导致添加账户失败，可切换回npm官方源:
> ``` bash
> npm config set registry https://registry.npmjs.org/
> ```
> 因为taobao镜像源是只读的。


## 发布到npm

发布前检查是否已存在同名package，在[官网](https://www.npmjs.com/)直接搜索你要命名的名字，即package.json中`name`字段，如果已存在需要更名，不得重复。

发布：
``` bash
npm publish
```
因为包名带有@符，使用如下命令发布到npm表示公开:
``` bash
npm publish --access public
```

> 每次发布版本需要修改版本号

## 撤销发布包

如果发现已经发布的版本有问题，可以进行撤销操作：
``` bash
npm unpublish <packagename>@<version>
```
如果有权限问题，撤销不了，可以添加`--force`。

撤销还是有诸多限制的：

1. 根据规范，只有在发包的24小时内才允许撤销发布的包（ unpublish is only allowed with versions published in the last 24 hours）
2. 即使你撤销了发布的包，发包的时候也不能再和被撤销的包的名称和版本重复了（即不能名称相同，版本相同，因为这两者构成的唯一标识已经被“占用”了）

## 单元测试
单元测试原则:

1. 对全新的代码或修改过的代码进行单元测试
1. 单元测试根据单元测试计划和方案进行，排除测试的随意性
1. 必须保证单元测试计划、单元测试方案、单元测试用例等经过评婶
1. 当测试用例的测试结果与预期结果不一致时，单元测试的执行人员需如实记录实际的测试结果
1. 只有当测试计划中的结束标准达到时，单元测试才能结束
1. 对被测试单元需达到的一定的代码覆盖率要求

测试库:[mocha](https://mochajs.org/)
``` bash
npm install -g mocha --verbos
npm install --save-dev chai --verbos
```

书写单元测试脚本： `tests/readAndWriteFile.js`
``` bash
#mocha tests/readAndWriteFile.js
npm run mocha:tests:readAndWriteFile
```

一键测试：
``` bash
#mocha --watch tests
npm run mocha:tests
```

生成测试报告：

``` bash
npm install --save-dev mochawesome --verbos
npm install --save-dev mocha --verbos
npm install -g istanbul --verbos
```

测试结果生成html报表:
``` bash
#mocha --reporter mochawesome tests
npm run mocha:reporter
```
能不能看看测试覆盖率呢
``` bash
#istanbul cover ./node_modules/mocha/bin/_mocha -- -t 2000 --recursive -R spec tests/
npm run istanbul:cover:tests
```

## 命令行

package.json 添加如下示例：
``` json
"bin": {
    "hello": "./bin/hello.js"
},
```

> 注：
>
> 开发模式可以使用：
>
> ``` bash
> sudo npm link   #添加命令行模式
> sudo npm unlink #取消命令行模式
> ``` 

执行示例命令：

``` bash
$ hello morning  A --n Sogrey B  --a 18 C
Good Morning
hello Sogrey,18
hello Sogrey,18
argv._ morning,A,B,C
写入成功？ true
写入的内容是： 测试写入文件数据：说明文档
```

## 参考

- [记npm包开发全过程](https://blog.csdn.net/white__cat/article/details/77051995)
- [通过npm写一个cli命令行工具](https://www.cnblogs.com/buzhiqianduan/p/7655612.html)
- [Node.js 命令行程序开发教程](https://www.ruanyifeng.com/blog/2015/05/command-line-with-node.html)
