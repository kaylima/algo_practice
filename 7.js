// Assignment: Array With Odd Numbers

// Write a program that creates an array 'Y'
// that contains all the odd numbers between 1 to 255. When the program is done,
// 'y' should have the value of [1, 3, 5, 7, ... 255]. Again, make sure you come up
// with a simple base case and write instructions to solve that base case first and
// then test your instructions for other complicated cases. (you can do this using
// a simple for loop.  You are allowed to use .push method)


// METHOD 1

var y = [];

for (var i = 1; i <= 255; i + 2) {
   y.push(i);
}

console.log(y);

// METHOD 2

var y = [];

for (i = 0; i <= 255; i ++) {
   if (i % 2 == 1){
      y.push(i);
   }
}

console.log(y);
