function describe_city(city: string, country: string = 'Pakistan') {
    console.log(`${city} is in ${country}.`);
}

// Call the function for three different cities
describe_city('Karachi'); // City in Default Country (Pakistan)
describe_city('Peshawar'); // City in Default Country (Pakistan)
describe_city('New York', 'USA'); // City in USA
