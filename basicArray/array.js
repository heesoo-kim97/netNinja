let ninjas = ['shaun', 'ryu', 'chun-li'];
ninjas[1] = 'ken';
console.log(ninjas);

let result = ninjas.join(',');
let index = ninjas.indexOf('chun-li');
let conc = ninjas.concat()

/* javascript data types 
numbers
boolean - true/false
string
null - needs to be assigned
undefined - given when a variable is assigned anything
object - array
symbol
*/

//type conversion
let score = '100';

score = Number(score);
console.log(score + 1);
console.log(typeof score);

let newString = String(50);
console.log(newString, typeof newString);