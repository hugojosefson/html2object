var html2object = require('html2object');
var getFile = require('get-file');

describe('test setup', function () {
  it('should work', function () {
    true.should.not.equal(false);
  });
});

describe('my module', function () {
  it('should be a function', function () {
    html2object.should.be.a("function")
  });

  it("should find body > div#mydivid", function (done) {
    prepareFixtureObject(done, function (err, o) {
      o.should.be.an("object");
      o.should.have.property("mydivid");
      o.mydivid.should.be.an("object");
      done();
    });
  });

  it("should find body > div#mydivid > spanclass1", function (done) {
    prepareFixtureObject(done, function (err, o) {
      o.mydivid.should.have.property("myspanclass1");
      o.mydivid.myspanclass1.should.be.an("object");
      done();
    });
  });

  it("should find body > div#mydivid > spanclass2", function (done) {
    prepareFixtureObject(done, function (err, o) {
      o.mydivid.should.have.property("myspanclass2");
      o.mydivid.myspanclass2.should.be.an("object");
      done();
    });
  });

  function prepareFixtureObject(done, cb) {
    getFile("fixture.html", function (err, html) {
      if (err) {
        done(err);
      } else {
        var o = html2object(html);
        cb(null, o);
      }
    });
  }


});

