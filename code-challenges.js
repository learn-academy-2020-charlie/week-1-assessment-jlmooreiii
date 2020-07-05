// ASSESSMENT 1: Coding practical questions

// Please read all questions thoroughly
// Psuedo coding is highly recommended

// --------------------1) Create a function that determines if a temperature is below boiling point, at boiling point or above boiling point. Boiling point is 212 degrees Farhenheit.
// Use the test variables provided below. Expected outcome: "35 is below boiling point", "350 is above boiling point", "212 is at boiling point"


var temp1 = 35
var temp2 = 350
var temp3 = 212
// Declare a function called atBoilingPoint with an arg "temp"
const atBoilingPoint = (temp) => {
    // Use if statement to determine if the value is at, below or abovee the bp
    if (temp == 212) {
        return `${temp} is at boiling point`;
    } else if (temp < 212) {
        return `${temp} is below boiling point`;
    } else {
        return `${temp} is at above point`;
    }
}
    // Test atBoilingPoint()
    console.log("CHALLENGE 1");
    console.log("This is for 35: " + atBoilingPoint(temp1));
    console.log("This is for 350: " + atBoilingPoint(temp2));
    console.log("This is for 212: " + atBoilingPoint(temp3));
    console.log("\n");



// --------------------2) Create a function that multiplies each number in the array by 5 using a for loop.
// Use the test variable provided below. Expected outcome: [15, 35, 0, 30, -45]


var myNumbers1 = [3, 7, 0, 6, -9];
// Declare a function called multByFive, that takes an array as arg.
const multByFive1 = (array) => {
    // Create a new array to store the multiplied values. I don't want to change the original array. 
    let newArr = [];
    // Create a for loop that will iterate thru myNumbers1.
    for (let i = 0; i < myNumbers1.length; i++) {
        // For each element in myNumbers1, multiply by 5. Store the result in a new variable multValue
        let multValue = myNumbers1[i] * 5;
        // Push the multValue to newArr
        newArr.push(multValue);
    } // This closes the for loop

    // Return newArray 
    return newArr;        
} // This closes multByFive();

// Test multByFive()
console.log("CHALLENGE 2");
console.log("This is testing multByFive1() using myNumbers1 array:")
console.log(multByFive1(myNumbers1));
console.log("\n");
    

// --------------------3) Create a function that multiplies each number in the array by 5 using map.
// Use the test variable provided below. Expected outcome: [40, -35, 0, 30, 10]


var myNumbers2 = [8, -7, 0, 6, 2];

// Declare a function multByFive2() that will take any array.
const multByFive2 = (array) => {
    // Use .map() on the array. Create a variable to house the new array that .map() generates.
    let multArray = array.map(value => {
        // Mutiply each element in the arg array by 5.
        return value * 5;
    }) // Close the .map() function.
    // Return the new array wil all the multipled values
    return multArray;
    
} // Close the multByFive2() function
// Test to make sure multByFive() works.
console.log("CHALLENGE 3")
console.log("myNumbers2 array:");
console.log(myNumbers2);
console.log("multArray from function:");
console.log(multByFive2(myNumbers2));
console.log("\n");


// --------------------4) Create a function that takes in an array and returns an array with only the values at odd indexes.
// Use the test variables provided below. Expected output: [ "Chai tea", "Mocha", "Double espresso" ]

var coffeeRun = ["Vanilla latte", "Chai tea", "Black coffee", "Mocha", "Americano", "Double espresso"]

// Create a function makeOddIndexArray() that will handle any array given
const makeOddIndexArray = (array) => {
    // Call .filter() on array used as arg. Be sure to store the new array that .filter() generates.
   let oddIndexArray = array.filter(value => {
       // Use condition that is a truthy statement for when the index of the array passed as an arg is odd. Be sure to return.
        return (array.indexOf(value) % 2) !== 0; 
    }) // Close the .filter().
    // Return the new array created by the method
    return oddIndexArray;
}// Close oddIndexArray()

// Test to maek sure function works
console.log("CHALLENGE 4");
console.log("This is coffeeRun array:");
console.log(coffeeRun);
console.log("This is the result of my function make OddIndexArray():");
console.log(makeOddIndexArray(coffeeRun));
console.log("\n");

// --------------------5) Create a function that removes all the vowels from a string.
// Use the test variables provided below. Expected output: "HyThrLrnStdnt" "LvJvScrpt"

var stringWithVowels1 = "HeyThereLearnStudent"
var stringWithVowels2 = "ILoveJavaScript"

// Declare a function, makeVowelsPls() that will be able to take any string
const noVowelsPls = (string) => {
    // Create an array, vowelArray, that contians all of the possible vowels, in both cases
    let vowelArray  = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    // Create an array, charArray, out of the string passed as arg.
    let charArray = string.split("");
    // For each element in charArray, see if it is in vowelArray. If the character passes, then store it in new array, noVowelArray.
    let noVowelArray = charArray.filter((value, index) => {
        let isVowel = true;
        return isVowel !== (vowelArray.includes(charArray[index]));
    }) // Closes .filter().
    // Convert noVowelArray to a new string, noVowelString.
    let noVowelString = noVowelArray.join("");
    // Return noVowelString.
    return noVowelString;
}
// Test to make sure function works
console.log("CHALLENGE 5");
console.log("This is stringWithVowels1 string:");
console.log(stringWithVowels1);
console.log("This is the result of noVowelsPls(stringWithVowels1):");
console.log(noVowelsPls(stringWithVowels1));
console.log("\n");

console.log("This is stringWithVowels2 string:");
console.log(stringWithVowels2);
console.log("This is the result of noVowelsPls(stringWithVowels2):");
console.log(noVowelsPls(stringWithVowels2));
console.log("\n");





// --------------------6) Expand the logic from #5 to inform your user if the variable passed into the vowel removal function is not a string.
// Copy and paste or rewrite the function. Use the test variables provided below.

var stringWithVowels3 = true
var stringWithVowels4 = 42
var stringWithVowels5 = "CodingIsGreat"

// Declare a function, makeVowelsPls2() that will be able to take any string
const noVowelsPls2 = (string) => {
    // Use typeof <argument> to see if arg is actually a string. Store result in variable argType.
    let argType = typeof string;
    // if statement to see if argType is a string. If argType is not a string, return "Please us a string type argument for function noVowelsPls()." If it is a string, the rest of the function will run.
    if (argType !== "string") {
        return "Please us a string type argument for function noVowelsPls().";
    }
    // Create an array, vowelArray, that contians all of the possible vowels, in both cases
    let vowelArray = ["A", "a", "E", "e", "I", "i", "O", "o", "U", "u"];
    // Create an array, charArray, out of the string passed as arg.
    let charArray = string.split("");
    // For each element in charArray, see if it is in vowelArray. If the character passes, then store it in new array, noVowelArray.
    let noVowelArray = charArray.filter((value, index) => {
        let isVowel = true;
        return isVowel !== (vowelArray.includes(charArray[index]));
    }) // Closes .filter().
    // Convert noVowelArray to a new string, noVowelString.
    let noVowelString = noVowelArray.join("");
    // Return noVowelString.
    return noVowelString;
}
// Test to make sure function works
console.log("CHALLENGE 6");
console.log("This is the result of Test 1 using <true>:");
console.log(noVowelsPls2(stringWithVowels3));
console.log("\n");

console.log("This is the result of Test 2 using <42>:");
console.log(noVowelsPls2(stringWithVowels4));
console.log("\n");

console.log("This is the result of Test 3 using <\"CodingIsGreat\">:");
console.log(noVowelsPls2(stringWithVowels5));
console.log("\n");

