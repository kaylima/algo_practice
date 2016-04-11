// Assignment: Print Sum
// Write a program that would print the sum of all the odd numbers from 1 to 5000

var sum = 0;

for (var i = 1; i <= 5000; i++) {
   if (i % 2 == 1) {
      sum += i;
   }
}
