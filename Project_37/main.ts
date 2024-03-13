function make_shirt(size: string = 'Large', message: string = 'I love TypeScript') {
    console.log(`The shirt is size ${size} and it says: "${message}"`);
}

// Create a large shirt with the default message
make_shirt();

// Create a medium shirt with the default message
make_shirt('Medium');

// Create a shirt of any size with a different message
make_shirt('Small', 'Hello, World!');
