// This showcase was inspired by https://github.com/nodejs/node/blob/e01c1d700d9fdb197ea40a444ebd228337a7dd6e/test/parallel/test-fs-write-file-flush.js#L52

import { test, describe, expect } from 'vitest';
import { validatePositiveNumber } from '../../01-shared-code/validatePositiveNumber.esm';

describe(`callback version`, () => {
  test(`valid`, () => new Promise((resolve, reject) => {
    validatePositiveNumber(1, (error, isValid) => {
      try {
        expect(isValid).toBeTruthy();
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }));

  test(`invalid`, () => {
    expect(true).toBeTruthy();
  });
  // etc
});

describe(`promise based version`, () => {
  test(`valid`, () =>
    validatePositiveNumber(1)
      .then(isValid => {
        expect(isValid).toBeTruthy();
      })
  );

  test(`invalid`, () => {
    expect(true).toBeTruthy();
  });
  // etc
});
