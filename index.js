// TODO: use less (heavy) dependencies

var jQuery = require("jquery");
var _ = require("underscore");

module.exports = html2object;

function html2object(html) {
  var jqHtml = jQuery(html);
  return parseChildren(jqHtml.children());
}

function parseChildren(children) {
  return _.map(children, parseChild);
}

function parseChild(child) {
  if (child.id) {
    return [child.id, parseChildren(child.children())];
  } else if (child.name) {
    return [child.name, parseChildren(child.children())];
  } else if (child.class) {
    return [child.class, parseChildren(child.children())];
  } else {
    return null;
  }
}
