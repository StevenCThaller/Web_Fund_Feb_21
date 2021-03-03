// WARM UP
// Write a for loop (does not need to be in a function) that prints every value 
// from 1 to 10 (10 being inclusive)

// remember the parts of a for loop:
// 1. initial value - this is the var i = 1; because we're starting with 1
// 2. continue condition - we want to execute the code inside the loop as long
//                         as i is less than or equal to 10
// 3. code body - this is what actually runs each iteration of the loop
// 4. increment/decrement - what do we do after each runthrough
// the loop is from 2 -> 3 -> 4 -> 2 -> 3 -> 4 -> etc until step 2 returns false
for(var i = 1; i <= 10; i++) { 
    console.log(i);
}

// Step up: now add another for loop inside your original for loop that prints all 
// values between 0 and 5 (5 being exclusive) -- You now have a nested for loop!
// Run this and see what prints out, are you starting to see how nested for loops 
// operate?
for(var i = 1; i <= 10; i++){ // our initial loop from 1 through 10, inclusive
    console.log(i); // printing i at each value 
    for(var j = 0; j < 5; j++) { // and our nested for loop from 0-5, 5 not included
        console.log(j); // printing 0 1 2 3 4 
    }
}


// WARM UP 2
// Given an array, write a function that prints out each value in that array 
// (remember that functions are built in a way that you can pass ANY array in and 
// get the correct results)
function printArr(arr){ // our function, called printArr, accepts 1 parameter that we call arr
    for(var i = 0; i < arr.length; i++) { // to print each value, we need to check every index between 0 and the last index
        console.log(arr[i]); // print the value at position i in arr
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
function printLoop(arr){ // our function, called printLoop, accepts 1 parameter, called arr (an array)
    for(var i = 0; i < arr.length; i++) { // for a loop n elements long, we want to print the contents n times
        for(var j = 0; j < arr.length; j++) { // and this is for printing the actual individual values
            console.log(arr[j]); // print the value at position j in arr
        }
    }
}