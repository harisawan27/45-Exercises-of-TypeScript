var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function make_great(magicians) {
    var great_magicians = [];
    magicians.forEach(function (magician) {
        great_magicians.push("the Great ".concat(magician));
    });
    return great_magicians;
}
// Define a function to show the names of magicians
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Define an array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Dynamo', 'Teller'];
// Call the function to make the magicians great and store the result in a new array
var great_magicians = make_great(__spreadArray([], magicians, true)); // Making a copy of the original array
// Call the function to show the names of magicians before and after modification
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
