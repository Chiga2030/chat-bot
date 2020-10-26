function makeDecrementor() {
  let currentCount = 0;

  return function() {
    return currentCount--;
  };
}
