//Magicians: Make a array of magician’s names. 
// Pass the array to a function called show_magicians(), which prints the name of each magician in the array.

let magician_name = ["Asad","Khurram","Hamza","Moazzim","Kabir"]
function show_magicians(magician_name:string[]){
    magician_name.forEach(magician_name => {

        console.log(magician_name)
    });
}

show_magicians(magician_name)