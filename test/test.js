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

  it("should find div with id in body", function () {
    var o = myModule('<html><body><div id="myid" /></body></html>');
    o.should.be.an("object");
    o.should.have.property("myid");
    o.myid.should.be.an("object");
  });
});
