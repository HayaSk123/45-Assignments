"use strict";
//storing my name in a variable
let myName = "Haya sikander";
//converting it to uppercase and storing it in a variable
let upperCaseName = myName.toUpperCase();
//converting it to lowercase and storing it in a variable
let lowerCaseName = myName.toLowerCase();
let words = myName.split(" ");
console.log(words);
let TitleCase = "";
for (let i = 0; i < words.length; i++) {
    TitleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log(TitleCase.trim()); // Use trim() to remove extra whitespace at the end
console.log(upperCaseName);
console.log(lowerCaseName);
console.log(TitleCase);
