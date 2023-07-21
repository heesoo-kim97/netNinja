// for loops

for(let i=0; i < 5; i++) {
    console.log('in loop', i)
}
console.log('loop finished');

//white loops

let y = 0;

while(y < 5) {
    console.log('in loop: ', y);
    y++;
}

//do while loops

let z = 5;

do{
    console.log('value of z is: ', z);
    z++;
} while(z < 5);

//if statement
const ninjas = ['shaun', 'ryu', 'chun-li','yoshi'];
if (ninjas.length > 3) {
    console.log("thaits a lot of ninjas");
}

//break and continue

const scores = [0, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++) {
    if(scores[i]  === 0) {
        continue;
    }
    console.lof('your score: ', scores[i]);

    if(scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
} 

//switch statements
const grade = 'D';

switch(grade) {
    case 'A':
        console.log('you got an A!');
        break;
    case 'B':
        console.log('you got an B!');    
        break;
    case 'C':
            console.log('you got an C!');    
            break;    
    default:
        console.log('not a valid grade');
}