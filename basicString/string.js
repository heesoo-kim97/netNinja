let age = 25;
let year = 2019;

console.log(age, year);

age = 30;

console.log(age);

const points = 100;

console.log(points);

var score = 75;
console.log(score);

//strings
console.log('hello, world');

//string methods
let fullName = 'Barack Obama';
console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result);

let email = 'fjsdsaeidjd@gmail.com';
let index = email.indexOf('@');

//common string methods
let lastEmail = email.lastIndexOf('n');
console.log(lastEmail);

let emailSlice = email.slice(2,5);
console.log(emailSlice);

let emailSub = email.substr(4,10);
console.log(emailSub);

// this method only replaces first string f
let emailReplace = email.replace('f','d');
console.log(emailReplace);

//template strings
const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

let combine = `the blog called ${title} by ${likes} likes`;
console.log(combine);

