// write a function a string input and swaps the case of each character.
// The Quick Brown Fox the output should be tHE qUICK bROWN fOX.

const readline = require("readline")
const rl = readline.createInterface({
    input:process.stdin,
    output:process.stdout,
})




function titleCase(string) {
return string.split("").map (character =>{
if(character === character.toUpperCase()){
    return character.toLowerCase();

}
else {
    return character.toUpperCase();
}
}) .join("")
}



//prompts the user to enter a sentence
rl.question("Enter sentence:",(string) =>{
    const titledCased= titleCase(string);
    console.log (titledCased)
    rl.close()
})



