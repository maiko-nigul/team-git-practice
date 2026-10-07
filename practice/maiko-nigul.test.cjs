const test = require('node:test');
const assert = require('node:assert/strict');
const { getTotalQuantity } = require('./maiko-nigul.cjs');

test('A normal case: sums numeric quantity fields in a list', () => {
    const list = [
        { name: 'Apple', quantity: 10 },
        { name: 'Banana', quantity: 5 },
        { name: 'Orange', qty: 3 }
    ];
    assert.equal(getTotalQuantity(list), 18);
});


test('An empty or invalid case: handles empty list and non-array/invalid inputs', () => {
    assert.equal(getTotalQuantity([]), 0);
    assert.equal(getTotalQuantity(null), 0);
    assert.equal(getTotalQuantity(undefined), 0);
    assert.equal(getTotalQuantity('invalid string input'), 0);
    assert.equal(getTotalQuantity(123), 0);
});

test('A boundary case: empty array', () => {
    assert.equal(getTotalQuantity([]), 0);
});