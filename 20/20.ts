//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

let book : {
    tittle:string,
    Author:string,
    yearPublibshed:number
} =
{
    tittle:"Holy Quran",
    Author:" Prophet Muhammad ﷺ",
    yearPublibshed:650
};

console.log(`Book Info : " ${book.tittle} was verbally revealed from God to ${book.Author} published in ${book.yearPublibshed} CE "`)