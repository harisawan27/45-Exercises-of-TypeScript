function make_great(magicians: string[]): string[] {
    let great_magicians: string[] = [];
    magicians.forEach(magician => {
        great_magicians.push(`the Great ${magician}`);
    });
    return great_magicians;
}

// Define a function to show the names of magicians
function show_magicians(magicians: string[]) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Define an array of magician's names
let magicians: string[] = ['Harry Houdini', 'David Copperfield', 'Dynamo', 'Teller'];

// Call the function to make the magicians great and store the result in a new array
let great_magicians: string[] = make_great([...magicians]); // Making a copy of the original array

// Call the function to show the names of magicians before and after modification
console.log("Original Magicians:");
show_magicians(magicians);
console.log("\nGreat Magicians:");
show_magicians(great_magicians);
