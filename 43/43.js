"use strict";
// // Sandwiches: Write a function that accepts a array of items a person 
// wants on a sandwich. 
// The function should have one parameter that collects as 
// many items as the function call provides, and it should print a
//  summary of the sandwich that is being ordered. Call the function 
//  three times, using a different number of arguments each time.
function make_sandwich(...items) {
    console.log(`Making a sandwich with :${items.join(' , ')}`);
}
console.log("\t       Classic Turkey and Avocado Sandwich");
console.log("______________________________________________________________________________________________________________________________");
make_sandwich("1/2 ripe avocado", "2 slices of whole grain bread", "4 slices of turkey breast", "1/2 ripe avocado");
make_sandwich("1 slice of cheddar cheese", "1 tomato sliced", "A handful of lettuce or spinach");
make_sandwich("1 tablespoon of mayonnaise", "1 teaspoon of mustard", "Salt and pepper to taste");
console.log("______________________________________________________________________________________________________________________________");
