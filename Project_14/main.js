// Store the names of people you'd like to invite to dinner in an array called guestList
var guestList = ["Abuzar", "Adeel", "Tahir"];
// Print a personalized invitation message to each person
guestList.forEach(function (person) {
    console.log("Dear ".concat(person, ",\nYou are respectly invited to dinner at my house. It would be an honor to have you in my house at dinner.\nBest regards,\n[Haris]"));
});
