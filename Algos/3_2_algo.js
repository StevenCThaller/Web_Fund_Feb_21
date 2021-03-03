// "CHALLENGE" 1
// Push a value into an array
// Given: var arr = [1,2,3,4], push in the value 5 and console.log the modified array [1,2,3,4,5]
// Notice how with the built in push method, the value is always added to the back

// CHALLENGE 2
// Given an array and a value, push the new value to the FRONT of the array -- remember 
// that the built in push function adds to the back!! So how can you add a value to the 
// FRONT of an array?
// Given: var arr = [2,3,4,5] and the value var num = 1, return an array => [1,2,3,4,5] 
// which has the new value pushed into the front of the array

function pushToFront(arr, num){ // parameters: the array we want to add to, and the number we want to add
    // summary of what we want to do:
    // add to the back of the array, then shift it forward to the front 1 element at a time
    arr.push(num); // this adds the number to the back

    for(var i = arr.length-1; i > 0; i--){ // now, we want to start at the last element, and go to the 2nd
        var temp = arr[i]; // swap with
        arr[i] = arr[i-1]; // the elemnt
        arr[i-1] = temp; // before it
    }

    return arr;
}