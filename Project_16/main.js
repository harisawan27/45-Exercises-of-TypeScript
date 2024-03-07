// Store the names of people you'd like to invite to dinner in an array called guestList
var guestList = ["Abuzar", "Adeel", "Shahjahan"];
// Print a personalized invitation message to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are respectly invited to dinner at my house. It would be an honour to have you in my house at dinner.\nBest regards,\n[Haris]"));
});
// Print a message informing people about the bigger dinner table
console.log("Great news! We found a bigger dinner table.");
// Add one new guest to the beginning of the array
guestList.unshift("Hannan");
// Add one new guest to the middle of the array
guestList.splice(Math.floor(guestList.length / 2), 0, "Mairaj");
// Use push() to add one new guest to the end of the list
guestList.push("Bilal");
// Print a new set of invitation messages to the updated guest list
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are respectly invited to dinner at my house. It would be an honour to have you in my house at dinner.\nBest regards,\n[Haris]"));
});
