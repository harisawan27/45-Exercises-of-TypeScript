function describe_city(city, country) {
    if (country === void 0) { country = 'Pakistan'; }
    console.log("".concat(city, " is in ").concat(country, "."));
}
// Call the function for three different cities
describe_city('Karachi'); // City in Default Country (Pakistan)
describe_city('Peshawar'); // City in Default Country (Pakistan)
describe_city('New York', 'USA'); // City in USA
