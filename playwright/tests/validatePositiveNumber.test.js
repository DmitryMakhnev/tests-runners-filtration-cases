// This showcase was inspired by https://github.com/nodejs/node/blob/e01c1d700d9fdb197ea40a444ebd228337a7dd6e/test/parallel/test-fs-write-file-flush.js#L52

const { test, expect } = require('@playwright/test');
const { validatePositiveNumber } = require('../../01-shared-code/validatePositiveNumber');

test.describe(`callback version`, () => {
  test(`valid`, async () => {
    const isValid = await new Promise((resolve, reject) => {
      validatePositiveNumber(1, (error, isValid) => {
        if (error) {
          reject(error);
        } else {
          resolve(isValid);
        }
      });
    });
    expect(isValid).toBeTruthy();
  });

  test(`invalid`, () => {
    expect(true).toBeTruthy();
  });
  // etc
});

test.describe(`promise based version`, () => {
  test(`valid`, async () => {
    const isValid = await validatePositiveNumber(1);
    expect(isValid).toBeTruthy();
  });

  test(`invalid`, () => {
    expect(true).toBeTruthy();
  });
  // etc
});
