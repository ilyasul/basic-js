const { NotImplementedError } = require('../lib');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arrayNumb = Array.from(String(n));
  const digitsArray = arrayNumb.map((value) => Number(value));
  const minNumb = digitsArray.reduce((acc, value) => Math.min(acc, value));
  const indexMinNumb = digitsArray.indexOf(minNumb);
  if (arrayNumb[0] < arrayNumb[1]) return +digitsArray.splice(1, digitsArray.length).join('');
  digitsArray.splice(indexMinNumb, 1);
  return +digitsArray.join('')
}

module.exports = {
  deleteDigit
};
