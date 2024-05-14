// Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let studentname = "MuhammadMuaaz";
console.log("_____________________________________________________");
console.log("LowerCase  =  " +studentname.toLowerCase());
console.log("_____________________________________________________");
console.log("UpperCase  =  " +studentname.toUpperCase());

let words:string[] =studentname.split("");
let titlecase:String= "";
for(let i=0;i<words.length;i++){
    titlecase +=words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";

};
console.log("_____________________________________________________");
console.log("TitleCase  =  " + titlecase);
console.log("_____________________________________________________");