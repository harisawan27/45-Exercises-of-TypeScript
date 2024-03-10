var string1 = 'apple';
var string2 = 'banana';
var string3 = 'apple';
var num1 = 10;
var num2 = 20;
var array = ['Haris', 'Abuzar', 'Adeel', 'Tahir'];
// Tests for equality and inequality with strings
console.log("Test for equality with strings: I predict True.");
console.log(string1 === string3); // True
console.log("Test for inequality with strings: I predict True.");
console.log(string1 !== string2); // True
// Tests using the lower case function
console.log("Test using lower case function: I predict False.");
console.log(string1.toLowerCase() === string2.toLowerCase()); // False
// Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
console.log("Numerical test for equality: I predict False.");
console.log(num1 === num2); // False
console.log("Numerical test for greater than: I predict False.");
console.log(num1 > num2); // False
console.log("Numerical test for less than: I predict True.");
console.log(num1 < num2); // True
console.log("Numerical test for greater than or equal to: I predict False.");
console.log(num1 >= num2); // False
console.log("Numerical test for less than or equal to: I predict True.");
console.log(num1 <= num2); // True
// Tests using "and" and "or" operators
console.log("Test using 'and' operator: I predict True.");
console.log((num1 === 10) && (num2 === 20)); // True
console.log("Test using 'or' operator: I predict True.");
console.log((num1 === 10) || (num2 === 30)); // True
// Test whether an item is in an array
console.log("Test whether an item is in an array: I predict True.");
console.log(array.includes('Haris')); // True
// Test whether an item is not in an array
console.log("Test whether an item is not in an array: I predict False.");
console.log(!array.includes('Shahjahan')); // False
