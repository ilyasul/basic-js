const { NotImplementedError } = require('../lib');

/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const array = [...email].reverse();
  const startIndexOfDomain = array.indexOf('@');
  const result = array.slice(0, startIndexOfDomain);
  return result.reverse().join('');
}

module.exports = {
  getEmailDomain
};
