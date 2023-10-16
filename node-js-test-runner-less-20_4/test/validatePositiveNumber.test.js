// This showcase was inspired by https://github.com/nodejs/node/blob/e01c1d700d9fdb197ea40a444ebd228337a7dd6e/test/parallel/test-fs-write-file-flush.js#L52

const assert = require('assert');
const { describe, test } = require('node:test');

const { validatePositiveNumber } = require('../../01-shared-code/validatePositiveNumber');

describe(`callback version`, () => {
  test(`valid`, () => new Promise((resolve, reject) => {
    validatePositiveNumber(1, (error, isValid) => {
      try {
        assert.ok(isValid);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }));

  // invalid, etc
});

describe(`promise based version`, () => {
  test(`valid`, () =>
    validatePositiveNumber(1)
      .then(isValid => {
        assert.ok(isValid);
      })
  );

  // invalid, etc
});
