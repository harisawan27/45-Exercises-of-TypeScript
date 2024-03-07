var personName = "Haris Awan";
// Lowercase
console.log("Lowercase:", personName.toLowerCase());
// Uppercase
console.log("Uppercase:", personName.toUpperCase());
// Titlecase
function toTitleCase(str) {
    return str.replace(/\b\w/g, function (char) { return char.toUpperCase(); });
}
console.log("Titlecase:", toTitleCase(personName));
