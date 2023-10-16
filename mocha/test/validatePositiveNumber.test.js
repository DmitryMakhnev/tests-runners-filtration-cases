// This showcase was inspired by https://github.com/nodejs/node/blob/e01c1d700d9fdb197ea40a444ebd228337a7dd6e/test/parallel/test-fs-write-file-flush.js#L52

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

