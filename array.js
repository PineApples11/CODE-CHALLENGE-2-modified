
const prompt = require("prompt-sync")({sigint : true})

let arrayInput = prompt('Enter an array of numbers: ')

function generateArray(number,number2) {
    const array  =[] 

    if (number <= number2){
        for (let i=number; i<=number2; i++){
            array.push(i)
        }
    } else  {
        for(let i=number; i>=number2; i--){
            array.push(i)
        }
    }
    return array;

}

console.log(generateArray(4,6))

console.log(generateArray(-5,-6))
