// Assignment: Max, Min, and Average
//
// Given an array x (e.g. [1,5, 10, -2]), create
// an algorithm (sets of instructions) that prints the maximum number in the array,
// minimum value in the array as well as the average values in the array.

var sum = 0;
var max = 0;
var min = 0;

var x = [1, 5, 10, -2];

for (var i = 0; i < x.length; i++){
   sum += x[i];

   if (x[i] < min) {
      min = x[i];
   }

   else if (x[i] > max) {
      max = x[i];
   }
}

console.log('max number is ' + max + ' and the min number is ' + min + '. the sum is ' + sum);
