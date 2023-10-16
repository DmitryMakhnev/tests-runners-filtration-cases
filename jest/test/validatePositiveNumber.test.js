
const assert = require('assert');
const { validatePositiveNumber } = require('../../01-shared-code/validatePositiveNumber');

describe(`callback version`, () => {
  it(`valid`, done => {
    validatePositiveNumber(1, (error, isValid) => {
      try {
        assert.ok(isValid);
        done();
      } catch (e) {
        done(e);
      }
    });
  });

  it(`invalid`, () => {
    assert.ok(true);
  });

  // etc
});

describe(`promise based version`, () => {
  it(`valid`, () =>
    validatePositiveNumber(1)
      .then(isValid => {
        assert.ok(isValid);
      })
  );

  it(`invalid`, () => {
    assert.ok(true);
  });

  // etc
});
