let readAndWriteFile = require('@sogrey/node-package-template')

var path = 'test-README.txt';
var data = '测试写入文件数据：说明文档';
readAndWriteFile.writeFile(path, data).then(function (flag) {
    console.log('写入成功？', flag);

    readAndWriteFile.readFile(path).then(function (data) {
        console.log('写入的内容是：', data);
    });
});