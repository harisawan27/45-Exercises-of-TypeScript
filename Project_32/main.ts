let current_users = ['haris', 'abuzar', 'adeel', 'tahir', 'shahjahan'];
let new_users = ['Haris', 'Musharraf', 'Bilal', 'Tahir', 'Abbas'];

new_users.forEach((newUser) => {
  if (
    current_users.some(
      (currentUser) => currentUser.toLowerCase() === newUser.toLowerCase()
    )
  ) {
    console.log(`Sorry, the username '${newUser}' is already taken. Please enter a new username.`);
  } else {
    console.log(`Congratulations! The username '${newUser}' is available.`);
  }
});

