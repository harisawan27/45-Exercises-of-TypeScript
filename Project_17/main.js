// Store the names of people you'd like to invite to dinner in an array called guestList
var guestList = ["Abuzar", "Adeel", "Shahjahan", "Mairaj", "Hannan"];
// Print a personalized invitation message to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are respectly invited to dinner at my house. It would be an honor to have you in my house at dinner.\nBest regards,\n[Haris]"));
});
// Print a message informing people about the limitation of guests
console.log("Unfortunately, due to unforeseen circumstances, we can only invite two people for dinner.");
// Remove guests from the list until only two names remain
while (guestList.length > 2) {
    var removedGuest = guestList.pop();
    console.log("Sorry ".concat(removedGuest, ", we can't invite you to dinner."));
}
// Print a message to each of the two remaining guests, letting them know they're still invited
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\n\nYou are still respectly invited to dinner at my house. We look forward to seeing you!\n\nBest regards,\n[Your Name]"));
});
// Remove the last two names from the list
guestList.pop();
guestList.pop();
// Print the updated list to ensure it's empty
console.log("Guest list:", guestList);
