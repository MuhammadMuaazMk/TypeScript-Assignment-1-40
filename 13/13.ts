//If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes 
//at least three people you’d like to invite to dinner. Then use your list to print a message to each person,
// inviting them to dinner.

let guestList: Array<string> = [
"Muhammad Muaaz ",
"Rabia Imran ",
"Khurram Shezhad ",
"Malik Hussain",
"Hira Imran"

];
console.log("________________________________________________________________________________")
for(let i = 0; i<guestList.length;i++){
    console.log("Dear "+ guestList[i] + "  , You are invited to dinner please Join Us.")
}
console.log("________________________________________________________________________________")