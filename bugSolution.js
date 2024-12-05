function foo(a, b) {
  // Explicit type checking and conversion
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }
  return a + b;
}
console.log(foo(1, 1)); // Output: 2
console.log(foo(1, "1")); //Throws Error