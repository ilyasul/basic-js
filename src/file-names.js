const { NotImplementedError } = require('../lib');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  console.log(`old: ${names}`);
  const result = [];
  function recursion(value, count) {
    const newValue = `${value}(${count})`
    if (result.includes(newValue)) {
      return recursion(value, count + 1);
    }
    return newValue
  }
  for (const value of names){
    if(result.includes(value))result.push(recursion(value, 1));
    if (!result.includes(value)) {
      result.push(value);
    }
  }
  console.log(`result: ${result}`);
  return result
}

module.exports = {
  renameFiles
};
