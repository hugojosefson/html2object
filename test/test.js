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
  
  var html = '<html><body><div id="mydivid"><span class="myspanclass1"></span><span class="myspanclass2"></span></div></body></html>';
  var o = myModule(html);

  it("should find body > div#mydivid", function () {
    o.should.be.an("object");
    o.should.have.property("mydivid");
    o.mydivid.should.be.an("object");
  });

  it("should find body > div#mydivid > spanclass1", function () {
    o.mydivid.should.have.property("myspanclass1");
    o.mydivid.myspanclass1.should.be.an("object");
  });

  it("should find body > div#mydivid > spanclass2", function () {
    o.mydivid.should.have.property("myspanclass2");
    o.mydivid.myspanclass2.should.be.an("object");
  });
});
