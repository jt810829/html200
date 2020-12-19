// bonus js: lesson 02 challenge 4 

let firstName = 'John';
let lastName = 'Smith';
const age = 15;
const driving_age = 16;

// string interpolation
msg = `${firstName} ${lastName} can drive, he/she has been driving for ${age - driving_age} years`;

if (age > driving_age) {
    console.log(msg);
} else {
    for (i = 5; i >= 0; i--){
        console.log(i);
    } 
}