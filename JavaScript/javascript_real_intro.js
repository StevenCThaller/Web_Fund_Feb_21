// variables - store data in memory in some way
var somename = "somevalue";

// data types
// primitive - strings, numbers, booleans, etc
    // immutable
// reference - arrays, objects
    // these ARE mutable

// conditionals - allow us to have different options and outcomes for the same
// chunk of code based on "input" values
var val = 10;
if(val < 10) {
    console.log("smaller than 10");
}
else {
    console.log("larger than or equal to 10")
}


if(val <= 2) {
    console.log("low roll");
}
else if(val > 2 && val <= 4) { // logical AND - both sides must resolve to true
    console.log("middle roll");
}
else {
    console.log("high roll")
}



var age = 21;

if(age >= 13) {
    console.log("You can see a PG 13 movie alone");
}
else if(age >= 21) {
    console.log("have a beer on me!");
}


// if(checkbox == true){
//     // break down user object
//     // validate that things are correct
//     // store user in database
//     // perform cookies functionality
// }
// else {
//     // break down the user object
//     // validate things are correct
//     // store user in database
// }

// break down user object
// validate that things are correct
// sore user in database
if(checkbox == true){
    // perform cookies functionality
}

// for loops (and a bit about while loops)
// 4 STEPS
// 1. initialization - where is our starting point
// 2. condition - should we enter the body of code or not
// 3. body - what code should run each and every iteration
// 4. incrementation/decrementation - how do we iterate
// repeat steps 2 3 and 4 until 2 fails
var counter = 4;

// some lines of code so eventually counter = 6

counter = 6;


for(counter; i < 10; i++) {
    console.log(i);
}

while(someCondition){
    // the trick is to embed some logic that could change the
    // condition
}

for(var i = 1; i <= 10; i++) {
    console.log(i);
}
// functions exactly the same as
var i = 1; 
while(i <= 10){
    console.log(i);
    i++;
}

// WHILE LOOPS SHINE when the condition changes more randomly

var userInput = readline();

while(userInput != 2){
    console.log("Incorrect input, please try again.");

    userInput = readline();
}

do {
    // body of code
} while(condition);

// functions - rather than storing information, we're storing sequences of logical steps

// var num1 = 5;
// var num2 = 11;
// var num3 = 19;
// var num4 = 27;
// var num5 = 2;

// var sum1 = 0;
// var sum2 = 0;
// var sum3 = 0; 
// var sum4 = 0;
// var sum5 = 0;

// for(var i = 0; i <= num1; i++) {
//     console.log(i);
//     sum1 += i; // same as saying sum1 = sum1 + i;
// }
// console.log(sum1);

// for(var i = 0; i <= num2; i++) {
//     console.log(i);
//     sum2 += i; // same as saying sum1 = sum1 + i;
// }
// console.log(sum2);

// for(var i = 0; i <= num3; i++) {
//     console.log(i);
//     sum3 += i; // same as saying sum1 = sum1 + i;
// }
// console.log(sum3);

// for(var i = 0; i <= num4; i++) {
//     console.log(i);
//     sum4 += i; // same as saying sum1 = sum1 + i;
// }
// console.log(sum4);

// for(var i = 0; i <= num5; i++) {
//     console.log(i);
//     sum5 += i; // same as saying sum1 = sum1 + i;
// }
// console.log(sum5);


function numsAndSums(num){
    if(isNaN(num)){
        return false;
    }

    var sum = 0;

    for(var i = 0; i <= num; i++){
        // console.log(i);
        sum += i;
    }

    console.log(sum);
    return sum;
}

var x = numsAndSums(8); // if this line of code becomes what it returns, what does it become? sum of 0-5
if(!x){
    console.log("Something went wrong");
}
else {
    console.log(x);
}



function buyMeDrink(money){
    // friend goes to store
    var costOfDrink = 4;
    money -= 4;

}

var mydrink = buyMeDrink(5);


function myFunction(array){

    return array;
}