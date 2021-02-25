// Variables - used to store data in memory during code execution
// variable declaration has 2 parts: the declaration and the variable name
var myName;
// assigning a value to a variable
myName = "Cody";

// Typically, we want to condense this into 1 step
var otherName = "Thaller";

// Data types
// Primitive
    // strings - denoted by quotes (either single or double)
        // examples: names, emails, sentences, paragraphs, pretty much any sequence of letters, numbers, and other symbols
        var myStory = `Lorem ipsum's dolor sit "amet consectetur" 'adipisicing' elit. Beatae id, quia natus praesentium minus ipsam dicta nesciunt temporibus ad est rem facilis quos voluptatum sapiente porro cupiditate! Magni, maxime id!`;
        // we can access individual characters within a string by accessing a specific index
        // console.log(myStory[7]);
        // but we cannot change any individual characters that way
        // myStory[7] = "l";
        // var numString = "27";
        // console.log(numString + 3);
        // console.log(myStory[7]);
        // we CAN concatenate strings
        // myStory = myStory + "banana";
        // console.log("Hi my name is Cody, and this is my story: " + myStory);
    // numbers
        var myNum = 27;
        var yourNum = 27.3;
        var sum = myNum + yourNum;
        // console.log(sum);
    // boolean - can only be 1 of two options: true or false
        var isCodyInstructor = true;
        var isCodyStudent = false;
// Reference
    // arrays - collections of other data. like strings, the individual elements are referenced by their index
    var arr = ["Cody", 30, false, 18.7, "sthaller@codingdojo.com"];
    console.log(arr[2]);
    // UNLIKE strings, arrays ARE mutable. they CAN be changed at a specific point
    arr[2] = true;

    console.log(arr);


// Loops - used to execute the same block of code some number of times
    // for - takes a starting point, a condition, and an iteration
    for(var i = 0; i <= 255; i++){
        console.log(i);
    }
    // while - we just need to know when to stop
    // var isTired = true;
    // while(isTired == false){
    //     console.log("can't slow me down!");
    // }

    // do {
    //     console.log("can't slow me down!");
    // } while(isTired == false);

    var myArray = [8, 6, 7, 5, 3, 0, 9];
    for(var i = 0; i < myArray.length; i++) {
        console.log(myArray[i]);
    }


// Conditionals - used to determine whether to perform some code
    var myAge = 22;

    if(myAge >= 21) {
        console.log("Have a pint!");
    }
    else if(myAge >= 18){
        console.log("You can have a cigar");
    }
    else {
        console.log("You should go watch Caillou");
    }

