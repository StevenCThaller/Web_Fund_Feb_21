// WARM UP
// Write a for loop (does not need to be in a function) that prints every value 
// from 1 to 10 (10 being inclusive)
for(var i = 1; i <= 10; i++) {
    console.log(i);
}

// Step up: now add another for loop inside your original for loop that prints all 
// values between 0 and 5 (5 being exclusive) -- You now have a nested for loop!
// Run this and see what prints out, are you starting to see how nested for loops 
// operate?
for(var i = 1; i <= 10; i++){
    console.log(i);
    for(var j = 0; j < 5; j++) {
        console.log(j);
    }
}


// WARM UP 2
// Given an array, write a function that prints out each value in that array 
// (remember that functions are built in a way that you can pass ANY array in and 
// get the correct results)
function printArr(arr){
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}


// CHALLENGE
// Given an array, write a function that loops through the length of the array, 
// but for every time it loops, it should also print out every value in that array
// EX: given var arr = [3,12,9] and function repeatPrint(arr), your console should 
// print out:
// 3
// 12
// 9
// 3
// 12
// 9
// 3
// 12
// 9
// Notice we printed all the values THREE TIMES (3, which is the length of the array)
// Hint: today's algo theme is nested for loops...
function printLoop(arr){
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
            console.log(arr[j]);
        }
    }
}