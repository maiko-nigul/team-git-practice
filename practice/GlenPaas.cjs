function countCompleted(items) {
  let count = 0;

  for (let i = 0; i < items.length; i++) {
    if (items[i].completed === true) {
      count = count + 1;
    }
  }

  return count;
}

module.exports = { countCompleted };
