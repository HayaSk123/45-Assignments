//storing my name in a variable
let myName : string = "Haya sikander"

//converting it to uppercase and storing it in a variable
let upperCaseName : string = myName.toUpperCase()
//converting it to lowercase and storing it in a variable
let lowerCaseName :string = myName.toLowerCase()
//converting it to TitleCase
let words: string[] = myName.split(" ");
console.log(words)
let TitleCase: string = "";
for (let i = 0; i < words.length; i++) {
    TitleCase += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}

console.log(upperCaseName)
console.log(lowerCaseName)
console.log(TitleCase)
