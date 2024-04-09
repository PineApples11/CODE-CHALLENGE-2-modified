
const prompt = require("prompt-sync")({sigint : true})

let arrayInput = prompt('Enter an array of numbers: ')

const numArray = JSON.parse(arrayInput).map(Number);
 
function getPrimeNUmbers(){
   let newArr = numArray.filter(isPrimeNumbers)

   function isPrimeNumbers(value){

    let isPrime = true

    if(value === 1){

        isPrime = false
        
    }

    for(let i = 2; i < value; i++){
        if(value % i === 0){
            isPrime = false;
        }
    }

    if  (isPrime){
        return value;
    }

   }
   return  newArr
}

console.log(getPrimeNUmbers())