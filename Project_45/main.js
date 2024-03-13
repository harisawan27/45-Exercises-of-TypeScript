function carInfo(manufacturer, model) {
    var extras = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        extras[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model: model
    };
    extras.forEach(function (extra) {
        var key = extra[0], value = extra[1];
        car[key] = value;
    });
    return car;
}
// Call the function with required information and two other name-value pairs
var car = carInfo('Toyota', 'Camry', ['color', 'red'], ['year', 2022]);
// Print the Object returned to check if all information was stored correctly
console.log(car);
