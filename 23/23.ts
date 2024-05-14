//More Conditional Tests: You don’t have to limit the number of tests you create to 10. 
//If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
//• Tests for equality and inequality with strings

///• Tests using the lower case function

///• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

//• Tests using "and" and "or" operators

//• Test whether an item is in a array

//• Test whether an item is not in a array


console.log("Testing Equalit with strings:")
console.log("apple"=="apple") //True
//console.log("apple" == "Apple"); //False

console.log("Testing with lowercase")
console.log("Apple".toLowerCase()=="apple");//True

console.log("Numerical Test")
console.log(10>5)//true
console.log(2<1)//false

console.log("Test with And and or operators")
console.log(true&&false)
console.log(true ||false)


let fruits = ["apple" ,"banana" , "cheery"]

console.log("Is 'apple' is fruits")
console.log(fruits.includes("apple"))//true

console.log("Is 'mango' is fruits")
console.log(!fruits.includes("mango"))//false