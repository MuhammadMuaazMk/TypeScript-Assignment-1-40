"use strict";
// Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names.
//  Because the original array will be unchanged, return the new array and store it in a separate array.
//  Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
let magicianss = ["Zubair", "Zulfiqar", "Zara", "Zaid"];
function show_magicianss(magicianss) {
    magicianss.forEach(magiciann => {
        console.log(magiciann);
    });
}
function make_greatt(magicianss) {
    let greatMagicians = [];
    magicianss.forEach(magicianss => {
        greatMagicians.push(`"${magicianss}" the Great`);
    });
    return greatMagicians;
}
let greatMagicians = make_greatt(magicianss.slice());
console.log("____________________________________");
console.log("         Original magicians\n");
show_magicianss(magicianss);
console.log("____________________________________");
console.log("       Great magicians\n");
show_magicianss(greatMagicians);
console.log("____________________________________");
make_greatt(magicianss);
