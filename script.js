//                    IF…ELSE & ELSE IF STATEMENT, TESTING SET OF CONDITIONS

/*Question no 01: Write a program that takes a character (number or string)
in a variable & checks whether the given input is a
number, uppercase letter or lower case letter. (Hint: ASCII
codes:- A=65, Z=90, a=97, z=122).*/
let char = prompt("Enter a character:");
let ascii = char.charCodeAt(0);
if (ascii >= 48 && ascii <= 57) {
    console.log(char + " is a number.");
} else if (ascii >= 65 && ascii <= 90) {
    console.log(char + " is an uppercase letter.");
} else if (ascii >= 97 && ascii <= 122) {
    console.log(char + " is a lowercase letter.");
} else {
    console.log("Invalid input.");
}

/*Question no 02: Write a JavaScript program that accept two integers and
display the larger. Also show if the two integers are equal.*/
let num1 = parseInt(prompt("Enter first number: "));
let num2 = parseInt(prompt("Enter second number: "));
if (num1 > num2) {
  console.log("The larger number is: " + num1);
} else if (num2 > num1) {
  console.log("The larger number is: " + num2);
} else {
  console.log("Both numbers are equal.");
}

/*Question no 03: Write a program that takes input a number from user &
state whether the number is positive, negative or zero.*/
let num = parseInt(prompt("Enter a number: "));
if (num > 0) {
  console.log("The number is positive.");
} else if (num < 0) {
  console.log("The number is negative.");
} else {
  console.log("The number is zero.");
}

/*Question no 04: Write a program that takes a character (i.e. string of
length 1) and returns true if it is a vowel, false otherwise*/
let char = prompt("Enter a character: ");
if (char == 'a' || char == 'e' || char == 'i' || char == 'o' || char == 'u' ||
    char == 'A' || char == 'E' || char == 'I' || char == 'O' || char == 'U') {
  console.log("The character is a vowel.");
} else {
  console.log("The character is not a vowel.");
}

/*Question no 05: Write a program that
a. Store correct password in a JS variable.
b. Asks user to enter his/her password
c. Validate the two passwords:
i. Check if user has entered password. If not, then
give message “ Please enter your password”
ii. Check if both passwords are same. If they are
same, show message “Correct! The password you
entered matches the original password”. Show
“Incorrect password” otherwise.*/
var correctPassword = "myPassword123";
var userPassword = prompt("Please enter your password");
if (userPassword === "") {
  alert("Please enter your password");
} else if (userPassword === correctPassword) {
  alert("Correct! The password you entered matches the original password");
} else {
  alert("Incorrect password");
}

/*Question no 06: This if/else statement does not work. Try to fix it:
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
else
greeting = "Good evening";}*/
var greeting;
var hour = 13;
if (hour < 18) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
console.log(greeting);

/*Question no 07: Write a program that takes time as input from user in 24
hours clock format like: 1900 = 7pm. Implement the
following case using if, else & else if statements*/
var time = prompt("Enter time in 24-hour format (e.g. 1900 for 7pm):");
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
} else {
    alert("Invalid time format entered!");
}





