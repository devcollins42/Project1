/*
When a user inputs a number
Loop from 1 to the entered number
If the current number is divisible by 3 then print "Fizz"
If the current number is divisible by 5 then print "Buzz"
If the current number is divisible by 3 and 5 then print "FizzBuzz"
Otherwise print the current number
*/

let guessNumber = parseInt(prompt("Enter any random number of your choice: "));
let x;
for (x = 1; x <= guessNumber.toString().length;x++){
     if(guessNumber % 3 == 0 && guessNumber % 5 == 0){
        console.log("FizzBuzz");
     }
     else if (guessNumber % 3 ==0){
        console.log("Fizz");
     }
     else if (guessNumber % 5 == 0){
        console.log("Buzz");

     }
     else{
        console.log(guessNumber);
     }
     
} 