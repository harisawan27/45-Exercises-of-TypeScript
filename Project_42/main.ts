function make_great(magicians: string[]) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Define a function to show the names of magicians
function show_magicians(magicians: string[]) {
    for (let magician of magicians) {
        console.log(magician);
    }
}

// Define an array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Dynamo', 'Teller'];

// Call the function to make the magicians great
make_great(magicians);

// Call the function to show the names of magicians
show_magicians(magicians);
