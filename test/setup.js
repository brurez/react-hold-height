global.requestAnimationFrame = function(callback) {
  setTimeout(callback, 0);
};

// Fail tests on any warning
console.error = message => {
  throw new Error(message);
};
