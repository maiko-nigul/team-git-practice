const test = require('node:test');
const assert = require('node:assert/strict');
const { isValidTitle } = require('./mirko-aadva.cjs');

test('accepts a normal title', () => {
  assert.equal(isValidTitle('Learn Next.js'), true);
});

test('rejects empty and invalid values', () => {
  assert.equal(isValidTitle(''), false);
  assert.equal(isValidTitle('   '), false);
  assert.equal(isValidTitle(123), false);
});

test('checks title length boundaries after trimming', () => {
  assert.equal(isValidTitle(' a '), true);
  assert.equal(isValidTitle(' ' + 'a'.repeat(80) + ' '), true);
  assert.equal(isValidTitle('a'.repeat(81)), false);
});
