// Assignment: Insert X in Y
//
// Write a program that inserts a new number X at an
// index Y. For example if array = [1, 3, 5, 7] and X = 10, and Y = 2, by the end
// of your program array should be [1, 3, 10, 5, 7] (in other words we added '10'
// on index 2). Check the output of your array once your program is completed to
// make sure it's working correctly.

var array = [1, 3, 5, 7];
var x = 20;
var y = 2;

array.push(0);

for (var i = array.length-1; i < y; i--) {
   array[i] = array[i-1];
}

array[y] = x;

console.log(array);
