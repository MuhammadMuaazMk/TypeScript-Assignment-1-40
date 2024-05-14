/*Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. 
Make sure you use each character combination, "\t" and "\n", at least once.
 Print the name once, so the whitespace around the name i*/

 let personName: String = "\tMuhammad Muaaz \n";
 console.log("Name with whitespace : " +personName);

 let strippedname: String = personName.trim();
 console.log(strippedname);

