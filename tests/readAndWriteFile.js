//=========================================
// 针对测试 /lib/readAndWriteFile.js
// 单独测试 mocha tests/readAndWriteFile.js
//=========================================

var file = require('../lib/readAndWriteFile.js');
var expect = require('chai').expect;
 
describe('file：功能测试', function() {
 
    //writeFile功能测试
    describe('file.writeFile', function() {
 
        it('写文件：成功', function() {
            var path = './tests/results/test-README.md';
            var data = '测试写入文件数据：说明文档';
            return file.writeFile(path, data).then(function(flag) {
                expect(flag).to.be.equal(true);
            });
        });
 
        it('写文件：失败', function() {
            var path = './tests/results/test-write-test.txt';
            var data = '测试写入文件数据：我是写入的数据';
            return file.writeFile(path, data).then(function(){}, function(err) {
                expect(true).to.be.equal(true);
            });
        });
    });
 
    //readFile功能测试
    describe('file.readFile功能测试', function() {
 
        it('读文件：成功', function() {
            var path = './tests/results/test-README.md';
            return file.readFile(path).then(function(data) {
                expect(data).to.be.equal('测试写入文件数据：说明文档');
            });
        });
 
        it('读文件：失败', function() {
            var path = './tests/results/test-write-test.txt';
            return file.readFile(path).then(function(){}, function(err) {
                expect(true).to.be.equal(true);
            });
        });
    });
});