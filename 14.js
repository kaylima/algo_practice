// Assignment: Random Array
//
// Create an array X and fill the array with 10 values,
// each value being a random integer between 0 to 100.  For example when your
// program is done, X could be something like this: [35, 15, 3, 39, 53, 93, 25, 39,
// 59, 21].
//

var x = [];

for (var i = 0; i < 11; i++) {
   var random = Math.floor(Math.random() * 101);
   x.push(random);
}

console.log(x);
