// Assignment: Removing Negatives
//
// Given an array of multiple values (e.g. [0, -1,
// 2, -3, 4, -5, 6]), write a program that removes any negative values in that
// array.  Once your program is done, the array should be composed of only the
// non-negative numbers, in their original order.  Do this without creating a
// temporary array; only use the pop() method to remove values from the array.

var x = 0, -1, 2, -3, 4, -5, 6];

for (var i = 0; i < x.length; i ++) {
   if (x[i] < 0) {
      x.pop(x[i]);
   }
}

console.log(x);
