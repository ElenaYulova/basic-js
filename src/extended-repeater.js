const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */

function repeater(str, options) {
  const {
    repeatTimes = 1,
    separator = '+',
    additionRepeatTimes = 1,
    additionSeparator = '|'
  } = options;
  addition = options.addition !== undefined ? String(options.addition) : '';
  const optStr = new Array(additionRepeatTimes).fill(addition).join(additionSeparator);
  return new Array(repeatTimes).fill(str + optStr).join(separator);
}

module.exports = {
  repeater
};
