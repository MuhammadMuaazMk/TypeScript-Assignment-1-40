"use strict";
// Changing Guest List: You just heard that one of your guests can’t make the dinner,
//  so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// • Start with your program from Exercise 
// 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.
// • Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// • Print a second set of invitation messages, one for each person who is still in your list.
let guest_List = [
    "Muhammad Muaaz ",
    "Rabia Imran ",
    "Khurram Shezhad ",
    "Malik Hussain",
    "Hira Imran"
];
let guestwhoCantMakeit = "Malik Hussain";
console.log(guestwhoCantMakeit + " can't make it Dinner..\n");
let newGuest = "Sadam Hussain";
let indexOfguestwhoCantMakeit = guest_List.indexOf(guestwhoCantMakeit);
if (indexOfguestwhoCantMakeit !== -1) {
    guest_List[indexOfguestwhoCantMakeit] = newGuest;
}
console.log("________________________________________________________________________________");
console.log("Sencond set of Inviation Message :");
for (let i = 0; i < guest_List.length; i++) {
    console.log(guest_List[i] + ", You are invited to dinner please Join Us.");
}
console.log("________________________________________________________________________________");
