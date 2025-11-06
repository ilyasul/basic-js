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
  let count = 0;
  let name = '';
  const result = [];
  for (const item of [...str]) {
    if (name !== item && name !== '') {
      count === 1 ?
        result.push(`${name}`) :
        result.push(`${count}${name}`);
      count = 0;
    }
    console.log(item);
    name = item;
    count += 1;
  }
  count === 1 ?
    result.push(`${name}`) :
    result.push(`${count}${name}`);
  console.log(result);
  return result.join('')
}

module.exports = {
  encodeLine
};
