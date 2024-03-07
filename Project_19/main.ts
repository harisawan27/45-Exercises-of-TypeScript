// Assuming we're referring to the "Shrinking Guest List" exercise

// Store the names of people you'd like to invite to dinner in an array called guestList
let guestList: string[] = ["Abuzar", "Adeel", "Shahjahan", "Mairaj", "Hannan"];

// Print a personalized invitation message to each person
guestList.forEach(person => {
    console.log(`Dear ${person},\nYou are respectly invited to dinner at my house. It would be an honour to have you in my house at dinner.\nBest regards,\n[Haris]`);
});

// Print the number of people invited to dinner
console.log(`Number of people invited to dinner: ${guestList.length}`);
