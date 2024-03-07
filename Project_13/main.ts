// Store examples of favorite modes of transportation in an array called transportation
const transportation: string[] = ["car", "bicycle", "motorcycle", "plane"];

// Print statements about each mode of transportation
transportation.forEach(item => {
    console.log(`I would like to own a ${item}.`);
});

/* (item=>) is equivalent to
transportation.forEach(function(item) {
    console.log(`I would like to own a ${item}.`);
});
*/

