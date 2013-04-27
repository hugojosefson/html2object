var myModule = require('html2object');

describe('test setup', function () {
  it('should work', function () {
    true.should.not.equal(false);
  });
});

describe('my module', function () {
  it('should be a function', function () {
    myModule.should.be.a("function")
  });
});