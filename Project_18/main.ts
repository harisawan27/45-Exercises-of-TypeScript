// Store the locations I like to visit in an array
let placesToVisit: string[] = ["Turkey", "Dubai", "Balochistan", "Gilgit Baltistan", "Canada"];

// Print the array in its original order
console.log("Original order:", placesToVisit);

// Print the array in alphabetical order without modifying the actual list
console.log("Alphabetical order:", [...placesToVisit].sort());

// Print the array to show it's still in its original order
console.log("Original order after sorting:", placesToVisit);

// Print the array in reverse alphabetical order without changing the order of the original list
console.log("Reverse alphabetical order:", [...placesToVisit].sort().reverse());

// Print the array to show it's still in its original order
console.log("Original order after reverse sorting:", placesToVisit);

// Reverse the order of the list
placesToVisit.reverse();
console.log("Reversed order:", placesToVisit);

// Reverse the order of the list again to show it's back to its original order
placesToVisit.reverse();
console.log("Original order after reversing again:", placesToVisit);

// Sort the array so it's stored in alphabetical order
placesToVisit.sort();
console.log("Sorted in alphabetical order:", placesToVisit);

// Sort to change the array so it's stored in reverse alphabetical order
placesToVisit.sort((a, b) => b.localeCompare(a));
console.log("Sorted in reverse alphabetical order:", placesToVisit);
