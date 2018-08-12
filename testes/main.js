const numbers = [1, 2, 3, 4, 5, 6, 7];

const some = numbers.some(function(item) {
  return item % 2 === 0;
});

console.log(some);
// true