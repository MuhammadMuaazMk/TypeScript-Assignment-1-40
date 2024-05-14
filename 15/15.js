"use strict";
// // More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
// • Add one new guest to the beginning of your array.
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. 
// • Print a new set of invitation messages, one for each person in your list.
let guest__list = [
    "Muhammad Muaaz",
    "Rashid Khan",
    "Usman Khan",
    "Hira Imran"
];
let guesthowcanotmakeit = "Usman Khan";
console.log(guesthowcanotmakeit + "Can't make to dinner");
let new_Guest = "Babar Azam";
let indexOfguesthowcanotmakeit = guest__list.indexOf(guesthowcanotmakeit);
if (indexOfguesthowcanotmakeit !== -1) {
    guest__list[indexOfguesthowcanotmakeit] == new_Guest;
}
//#1
let newGuestatBeginning = "Muhammad Rizwan";
guest__list.unshift(newGuestatBeginning);
//console.log(guest__list)
//#2
let newGuestInMiddle = "Muhammad Amir";
let midPoint = Math.floor(guest__list.length / 2);
guest__list.splice(midPoint, 0, newGuestInMiddle);
//#3
console.log("________________________________________________________________________________");
console.log("Sencond set of Inviation Message :");
for (let i = 0; i < guest__list.length; i++) {
    console.log(guest__list[i] + ", You are invited to dinner please Join Us.");
}
console.log("________________________________________________________________________________");
