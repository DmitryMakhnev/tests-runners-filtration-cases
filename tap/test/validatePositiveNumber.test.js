// This showcase was inspired by https://github.com/nodejs/node/blob/e01c1d700d9fdb197ea40a444ebd228337a7dd6e/test/parallel/test-fs-write-file-flush.js#L52

const t = require('tap');
const { validatePositiveNumber } = require('../../01-shared-code/validatePositiveNumber');

t.test(`callback version`, async t => {
  t.test(`valid`, t => new Promise((resolve, reject) => {
    validatePositiveNumber(1, (error, isValid) => {
      try {
        t.ok(isValid);
        resolve();
      } catch (e) {
        reject(e);
      }
    });
  }));

  t.test(`invalid`, async t => {
    t.ok(true);
  });
  // etc
});

t.test(`promise based version`, async t => {
  t.test(`valid`, t =>
    validatePositiveNumber(1)
      .then(isValid => {
        t.ok(isValid);
      })
  );

  t.test(`invalid`, async t => {
    t.ok(true);
  });
  // etc
});
