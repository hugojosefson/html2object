// TODO: use less (heavy) dependencies

var domify = require("domify");
var _ = require("underscore");

module.exports = html2object;

function html2object(html) {
  var nodes = domify(html);
  return nodes2object(nodes);
}

function nodes2object(nodes) {
  var result = {};
  _.each(nodes, function (node) {
    possiblyAddNodeToResult(result, node);
  });
  return result;
}

function possiblyAddNodeToResult(result, node) {
  var key = node.id || node.name || node.class;
  if (key) {
    result[key] = node;
  }
}
