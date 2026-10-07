const test = require('node:test');
const assert = require('node:assert/strict');
const { countCompleted } = require('./GlenPaas.cjs');

test('counts completed items', () => {
  const items = [
    { title: 'Learn Git', completed: true },
    { title: 'Learn React', completed: false },
    { title: 'Learn Next.js', completed: true },
  ];
  assert.equal(countCompleted(items), 2);
});

test('returns 0 when nothing is completed', () => {
  const items = [
    { title: 'Learn Git', completed: false },
    { title: 'Learn React', completed: false },
  ];
  assert.equal(countCompleted(items), 0);
});

test('returns 0 for an empty array', () => {
  assert.equal(countCompleted([]), 0);
});
