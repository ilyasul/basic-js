const { NotImplementedError } = require('../lib');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  function searchCatsForArray(arr) {
    return arr.reduce((acc, value) => {
      console.log(acc);
      if (value === '^^') return acc + 1;
      return acc;
    }, 0)
  }
  return matrix.reduce((acc,value) => acc + +searchCatsForArray(value),0);
}

module.exports = {
  countCats
};
