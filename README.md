# NodePackageTemplate
npm 包模板

## 安装

``` bash
npm i @sogrey/node-package-template
```

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