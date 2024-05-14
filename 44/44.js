"use strict";
// Cars: Write a function that stores information about a car in a Object.
//  The function should always receive a manufacturer and a model name. 
//  It should then accept an arbitrary number of keyword arguments. 
//  Call the function with the required information and two other name-value pairs, such as a color or an optional feature. 
// Print the Object that’s returned to make sure all the information was stored correctly.
Object.defineProperty(exports, "__esModule", { value: true });
function make_Car(manufacturer, model, ...options) {
    let car = { manufacturer, model };
    options.forEach(([key, value]) => car[key] == value);
    return car;
}
console.log(make_Car("Toyota", "Corolla", ["color", "white"], ["year", 2016]));
console.log(make_Car("Bayerische Motoren Werke", "BMW", ["color", "GREY"], ["year", 2024]));
