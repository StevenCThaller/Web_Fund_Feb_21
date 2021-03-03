// It’s New Year’s Eve, so let’s play some dice games! It’ll be fun. What could go wrong?

// Challenge 1
// Create function rollOne() to return a randomly selected integer between 1 and 6 (inclusive).
function rollOne(){
    // so let's think about this
    // if Math.random() gives a random number between 0 and 1, inclusive of 0, but not inclusive of 1
    // and we need to spread that range to 1-6
    // we can multiply the result by 6, THEN round it down, and add 1
    // EXAMPLE: a Math.random() roll of 0.3587892523 can be multiplied by
    // 6, which gives us 2.1527355138. Then, if we round that down, and add 1,
    // it becomes a roll of 3
    // Obviously, we also need to return it, so let's do this in 1 slick line:
    return Math.floor(Math.random()*6)+1;
}
// Hint: You might want to look up Javascripts Math.random() function, Math.floor() Math.ceiling() Math.round()

// Challenge 2
// Second, create a function playFives(num), which should call rollOne() multiple times – ‘num' 
// times, in fact, where 'num' is input parameter to playFives(num). Each time, it should print 
// the value rollOne() returns, and if that return value is 5, also print “That’s good luck!”
function playFives(num){
    for(var i = 0; i < num; i++) { // this is how we make sure it runs "num" number of times
        // now, we want to call our rollOne() function in each iteration of the for loop and print the result
        var roll = rollOne();
        console.log(roll); 

        if(roll == 5) { // but, we also want to print something else if that roll is 5
            console.log("That's good luck!");
        }
    }
}

// Challenge 3
// Third, create a new function named playStatistics(), which should call rollOne() eight times 
// (but not print anything after each call). After the last of these eight calls, it should print 
// out the lowest and highest values that it received from rollOne, among those eight calls.
function playStatistics(){
    // this time, we want to make a bunch of dice rolls, but we DON'T want to print something
    // each time. We want to know the highest and lowest rolls after 8 plays, so!
    var min = 7; // you might be asking yourself why i'm setting min as such a high value
    var max = 0; // and max as such a low value
    // Looking ahead, to determine if a roll is lower than our previous minimum, or higher
    // than our previous maximum, it must be able to be lower and higher respectively.
    // this setup guarantees that if all rolls are a 6, we still get a min and max of 6,
    // or if all rolls are a 1, we get a min and max of 1, etc.

    // now, for our for loop! this one's easier, because it specifically asks for 8 rolls
    for(var i = 0; i < 8; i++) {
        var roll = rollOne(); // i'm storing this in a variable because we need to compare it against min/max

        if(roll > max) { // if the roll is higher than our previous max, set it as the new max
            max = roll;
        }
        else if(roll < min) { // otherwise, if the roll is lower than our previous min, set it as the new min
            min = roll;
        }
    }

    // now that we're outside and after our for loop, let's print the stats!
    console.log(`Highest Roll: ${max}\nLowest Roll: ${min}`); // look at THAT fancy syntax, huh??
}
