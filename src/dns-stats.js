const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const arrNew = domains.map((value) => value.split('.').reverse());
  console.log(arrNew);
  result = {};
  arrNew.forEach((value) => {
    let storage = '';
    for(let i = 0; i < value.length; i += 1) {
      storage += '.' + value[i];
      const searchKey = Object.keys(result).includes(storage);
      if(searchKey) result[storage] = result[storage] + 1;
      if(!searchKey) result[storage] = 1;
    }
  })
  console.log(result);
  return result
}

module.exports = {
  getDNSStats
};
