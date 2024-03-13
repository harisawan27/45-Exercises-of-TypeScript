function makeSandwich(...toppings: string[]) {
    console.log("Sandwich Summary:");
    if (toppings.length === 0) {
        console.log(" - Plain sandwich");
    } else {
        console.log(" - Sandwich with " + toppings.join(", "));
    }
}

// Call the function with different number of arguments
makeSandwich("Ham", "Cheese", "Tomato");
makeSandwich("Swiss cheese", "Pickles");
makeSandwich();
