function make_great(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Define a function to show the names of magicians
function show_magicians(magicians) {
    for (var _i = 0, magicians_1 = magicians; _i < magicians_1.length; _i++) {
        var magician = magicians_1[_i];
        console.log(magician);
    }
}
// Define an array of magician's names
var magicians = ['Harry Houdini', 'David Copperfield', 'Dynamo', 'Teller'];
// Call the function to make the magicians great
make_great(magicians);
// Call the function to show the names of magicians
show_magicians(magicians);
