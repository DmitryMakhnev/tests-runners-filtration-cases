/**
 * @param {*} validatable
 * @param {function(Error|null, boolean)} [cb]
 * @return {Promise<boolean>}
 */
const validatePositiveNumber = (validatable, cb) => {
  const result = Promise.resolve(
    typeof validatable === 'number'
    && !isNaN(validatable)
    && validatable > 0
  );

  if (cb) {
    result.then(
      value => {
        cb(null, value);
      },
      e => {
        cb(e, false);
      }
    );
  } else {
    return result;
  }
};

module.exports = {
  validatePositiveNumber,
};
