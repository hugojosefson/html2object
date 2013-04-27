var domify = require("domify");

module.exports = html2object;

function html2object(html) {
  var nodes = domify(html);
  return nodes2object(nodes);
}

function nodes2object(nodes) {
  var result = {};
  for (var i = 0; i < nodes.length; i++) {
    possiblyAddNodeToResult(result, nodes[i]);
  }
  return result;
}

function possiblyAddNodeToResult(result, node) {
  var key = node.id || nameOfNode(node) || classOfNode(node);
  if (key && !result[key]) {  // Only use first node. Don't overwrite existing.
    result[key] = node2object(node);
  }
}

function nameOfNode(node) {
  return node.attributes && node.attributes.name && node.attributes.name.value;
}

function classOfNode(node) {
  return node.attributes && node.attributes.class && node.attributes.class.value;
}

function node2object(node) {
  return nodes2object(node.childNodes);
}
