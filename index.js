var domify = require("domify");
var _ = require("underscore");

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
  var o = nodes2object(node.childNodes);
  var attributes = extractAttributesFromNode(node);
  if (attributes) {
    o._attributes = attributes;
  }
  return  o;
}

function extractPairsOfKeyValue(attributes) {
  return _.map(attributes, function (attribute) {
    return [attribute.name, attribute.value];
  });
}

function extractAttributesFromNode(node) {
  if (node.attributes) {
    return _.object(extractPairsOfKeyValue(node.attributes));
  } else {
    return null;
  }
}