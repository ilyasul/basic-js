const { NotImplementedError } = require('../lib');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates depth of nested array
 *
 * @example
 *
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) return 0;
    let temp = 1;
    for (const item of arr) {
      if (Array.isArray(item)) {
        const tempResult = 1 + this.calculateDepth(item);
        if (tempResult > temp) temp = tempResult;
      }
    }
    return temp
  }
}

module.exports = {
  depthCalculator: new DepthCalculator(),
};
