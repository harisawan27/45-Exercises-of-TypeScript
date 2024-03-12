var current_users = ['haris', 'abuzar', 'adeel', 'tahir', 'shahjahan'];
var new_users = ['Haris', 'Musharraf', 'Bilal', 'Tahir', 'Abbas'];
new_users.forEach(function (newUser) {
    if (current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("Sorry, the username '".concat(newUser, "' is already taken. Please enter a new username."));
    }
    else {
        console.log("Congratulations! The username '".concat(newUser, "' is available."));
    }
});
