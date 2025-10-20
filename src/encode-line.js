const { NotImplementedError } = require('../lib');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */

function encodeLine(str) {
  if (!str) return '';
  return str.replace(/([a-z])\1*/g, (item)=>(item.length > 1 ? item.length + item[0] : item[0]));
}


module.exports = {
  encodeLine
};
