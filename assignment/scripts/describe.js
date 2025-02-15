// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening.
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')

// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/

// 1. WRITE YOUR DESCRIPTION HERE
// We make a variable  called name with the value ' Dane'
// we check if name is the exact match as 'Mary'. if it is we will console.log ' Hi Mary!'. otherwise we will console.log 'How do you do?'.
// We  will console.log 'how do you do' because name is 'dane' and not 'mary'
//

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
//  We will create the variable secret. We will then create another variable and name it code, we will asign it the value of 123.
//if code equals to  123 then we will set the variable secret to 'super
// and we will multiply the variable code by 2 and the new value of code will be 246. and the value of secret is 'super'.
// if the variable code is greater than 250  we will set the variable secret to 'duper.
// because it is not greater than 250 , we console.log (secret)
// the value of secret is 'super'.
//

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// we create a variable called isStudent and set it to true as a boolean.
//we then create another variable name it age and set it to 34 as a number.
// We will also create a third variable called zip and give it the value of 55407
// if isStudent is true and zip is greater than 80000 we will console.log 'You're a student on the west coast!'.
// otherwise, if isStudent is false or age is less than 30, we will console.log 'what are your hobbies'.
// otherwise, if isStudent is true we will console.log 'welcome to prime'.
// otherwise we will just console.log 'how about the weather?'
// because isStudent is true we console.log 'welcome to prime'

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/

// REVERSE
// Now, for questions 4-6, we'll give you a description and some code.
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2.
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/

//4. We start with three variables -- colorOne is set to 'blue' and
// colorTwo is set to 'red', and mix is set to true. We check if mix is true
// -- it is, so we set colorOne and colorTwo to 'purple'

/*// FIX - colorOne should be set to 'blue and coloTwo should be set to red. 

let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4
// -- they are so we console.log 'throw away the food!'

/*
FIX we need to use && to check if both variables are true.

let temp = 40;
const time = 4;

if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;
// FIX because minAge equal to age we console.log 'no entry'

if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/
