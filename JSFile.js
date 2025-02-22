// Get user's first name
let Fname = prompt("Please enter your first name: ");

// Display welcome message
document.write("Welcome, " + Fname + "!");
console.log("Welcome, " + Fname + "!");

// Define constant for Pi value
const piValue = 3.1415926; 

// Get user's favorite number
let myFavNum = parseFloat(prompt("Enter your favorite number: "));

// Calculate area of a circle using the favorite number as radius (r)
let Area = piValue * Math.pow(myFavNum, 2); 

// Display calculated area

document.write("The area of a circle with radius " + myFavNum + " is: " + Area);
console.log("The area of a circle with radius " + myFavNum + " is: " + Area);

