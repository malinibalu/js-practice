//random numbers between 0 and 1

//const random = Math.random();
//console.log(random);


//random number between 10 and 25
// Math.random() * (Highest value - lowest value) + lowest value.

const random = Math.floor(Math.random() * (25 - 10) + 10);
console.log(`The random value between 10 and 25 is: ${random}`);