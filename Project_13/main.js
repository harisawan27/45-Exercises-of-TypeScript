// Store examples of favorite modes of transportation in an array called transportation
var transportation = ["car", "bicycle", "motorcycle", "plane"];
// Print statements about each mode of transportation
transportation.forEach(function (item) {
    console.log("I would like to own a ".concat(item, "."));
});
/* (item=>) is equivalent to
transportation.forEach(function(item) {
    console.log(`I would like to own a ${item}.`);
});
*/
