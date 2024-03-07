let personName: string = "Haris Awan";

// Lowercase
console.log("Lowercase:", personName.toLowerCase());

// Uppercase
console.log("Uppercase:", personName.toUpperCase());

// Titlecase
function toTitleCase(str: string): string {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
}

console.log("Titlecase:", toTitleCase(personName));
