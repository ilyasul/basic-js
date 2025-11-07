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
  console.log(str);
  console.log(options.repeatTimes);
  console.log(options.separator);
  console.log(options.addition);
  console.log(options.additionRepeatTimes);
  console.log(options.additionSeparator);
  const str1 = str;
  const addition = options.addition === undefined ? '' : options.addition;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  const separator = options.separator === undefined ? '+' : options.separator;
  const repeatTimes = options.repeatTimes === undefined ? 1 : Number.parseInt(options.repeatTimes);
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : Number.parseInt(options.additionRepeatTimes);
  console.log(`str: ${str}`);
  console.log(`repeatTimes: ${repeatTimes}`);
  console.log(`separator: ${separator}`);
  console.log(`addition: ${addition}`);
  console.log(`additionRepeatTimes: ${additionRepeatTimes}`);
  console.log(`additionSeparator: ${additionSeparator}`);
  let result = '';
  for (let i = 1; i <= repeatTimes; i += 1) {
    result += str1;
    for (let j = 1; j <= additionRepeatTimes; j += 1) {
      if (j === additionRepeatTimes) {
        result += addition;
      }
      if (j !== additionRepeatTimes) result += addition + additionSeparator;
    }
    if (i !== repeatTimes) result += separator;
  }
  console.log(`result ${result}\n`);
  return result;
}


module.exports = {
  repeater
};
