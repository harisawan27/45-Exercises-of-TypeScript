function carInfo(manufacturer: string, model: string, ...extras: [string, any][]): { manufacturer: string, model: string, [key: string]: any } {
    let car: { manufacturer: string, model: string, [key: string]: any } = {
        manufacturer: manufacturer,
        model: model
    };

    extras.forEach(extra => {
        const [key, value] = extra;
        car[key] = value;
    });

    return car;
}

// Call the function with required information and two other name-value pairs
let car = carInfo('Toyota', 'Camry', ['color', 'red'], ['year', 2022]);

// Print the Object returned to check if all information was stored correctly
console.log(car);
