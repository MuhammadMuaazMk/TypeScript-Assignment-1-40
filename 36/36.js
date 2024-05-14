"use strict";
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. 
// Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function makeshirt(size = "large", message = "I Love Typescript") {
    console.log(`Making a ${size} t-shirt with the message "${message}" printed on it.`);
}
console.log("____________________________________________________________________________________________");
makeshirt();
console.log("____________________________________________________________________________________________");
makeshirt("medium", "Sab se Phele apne Gabarana nahi hai");
console.log("____________________________________________________________________________________________");
makeshirt("small", "Imran Khan Zindabad");
console.log("____________________________________________________________________________________________");
