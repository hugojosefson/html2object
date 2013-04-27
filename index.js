// TODO: use less (heavy) dependencies

var domify = require("domify");
var _ = require("underscore");

module.exports = html2object;

function html2object(html) {
  var nodes = domify(html);
  var result = {};
  _.each(nodes, function(node){
    possiblyAddNodeToResult(result, node);
  });
  return result;
}

function possiblyAddNodeToResult(result, node) {
  if (node.id) {
    result[node.id] = node;
  } else if (node.name) {
    result[node.name] = node;
  } else if (node.class) {
    result[node.class] = node;
  }
}
