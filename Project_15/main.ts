// Store the names of people you'd like to invite to dinner in an array called guestList
let guestList: string[] = ["Abuzar", "Adeel", "Tahir"];

// Print a personalized invitation message to each person
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are respectly invited to dinner at my house. It would be an honor to have you in my house at dinner.\nBest regards,\n[Haris]`);
});

// Print the name of the guest who can't make it
const guestWhoCantMakeIt: string = "Tahir";
console.log(`Unfortunately, ${guestWhoCantMakeIt} can't make it to dinner.`);

// Replace the guest who can't make it with a new person
guestList = guestList.filter(person => person !== guestWhoCantMakeIt);
guestList.push("Shahjahan");

// Print a second set of invitation messages to the updated guest list
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are respectly invited to dinner at my house. It would be an honor to have you in my house at dinner.\nBest regards,\n[Haris]`);
});
