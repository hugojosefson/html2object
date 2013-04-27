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
  var key = node.id || nameOfNode(node) || classOfNode(node);
  if (key) {
    result[key] = node2object(node);
  }
}

function nameOfNode(node) {
  return node.attributes.name && node.attributes.name.value;
}

function classOfNode(node) {
  return node.attributes.class && node.attributes.class.value;
}

function node2object(node) {
  return nodes2object(node.childNodes);
}
