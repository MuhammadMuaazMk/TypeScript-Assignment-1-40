"use strict";
//Seeing the World: Think of at least five places in the world you’d like to visit.
//• Store the locations in a array. Make sure the array is not in alphabetical order.
//• Print your array in its original order.
//• Print your array in alphabetical order without modifying the actual list.
//• Show that your array is still in its original order by printing it.
//• Print your array in reverse alphabetical order without changing the order of the original list.
//• Show that your array is still in its original order by printing it again.
//• Reverse the order of your list. Print the array to show that its order has changed.
//• Reverse the order of your list again. Print the list to show it’s back to its original order.
//• Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
let places = ["Pakistan", "Saudia Arabia", "Dubai", "England", "Canda", "Qatar", "Palestine"];
console.log("\tOriginal Array\n");
console.log(places);
console.log("\n\tAlphabetical Order");
let sortOrder = places.sort();
console.log(sortOrder);
console.log(`\n\t   Original Order\n\n_______________________________________________________________________________________\n   ${places}`);
console.log("_______________________________________________________________________________________\n");
console.log("\tReverse Order");
let reverseOrder = places.sort().reverse();
console.log(reverseOrder);
console.log(`\n\t   Original Order\n\n_______________________________________________________________________________________\n   ${places}`);
console.log("_______________________________________________________________________________________\n");
console.log("____________________________________________________________");
places.reverse();
console.log("\t  Reversed Order \n" + places);
places.reverse();
console.log("\t  Original Order \n" + places);
console.log("____________________________________________________________\n\n");
console.log("____________________________________________________________");
places.sort();
console.log("\t  Alphabetical Order \n" + places);
places.reverse();
console.log("\t  Alphabetical Reversed Order\n" + places);
console.log("____________________________________________________________\n\n");
