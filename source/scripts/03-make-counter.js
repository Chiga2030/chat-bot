function makeCounter() {
  let currentCount = 0;

  return function() {
    return currentCount--;
  };
}
