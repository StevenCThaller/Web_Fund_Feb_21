// Change is inevitable, just like Thanos (especially when breaking a twenty). 
// Make a function generateCoinChange(cents) accept a number of American cents, compute and 
// print how to represent that amount with smallest number of coins. Common American coins 
// are pennies (1 cent), nickels (5 cents), dimes (10 cents), quarters (25 cents), and a 
// dollar (100 cents).
function generateCoinChange(cents){
    var change = { // let's switch things up! let's put all this info in an object!
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }

    change.dollars = Math.floor(cents / 100); // dividing cents by 100 and rounding down will give us the number of dollars
    cents %= 100; // remember, modulo is remainder devision. so if we had 173 cents, and did 173 % 100, we'd get 73 as a result,
    // which is the number of cents remaining after getting the dollars figured out. and %= is just like += or -=. 
    // cents %= 100 is just a shorthand notation for cents = cents % 100

    change.quarters = Math.floor(cents / 25); // and then we just repeat the pattern for each type of coin
    cents %= 25;

    change.dimes = Math.floor(cents / 10);
    cents %= 10;

    change.nickels = Math.floor(cents / 5);
    cents %= 5;

    change.pennies = cents; // this one's a little different, because by the time we get here, there are going to be 
    cents = 0; // between 0 and 4 cents leftover, so we can just set pennies to that number and set cents to 0 and be 
    // done with it

    // and a fancy/ugly printout.
    console.log(`Dollars: ${change.dollars}\nQuarters: ${change.quarters}\nDimes: ${change.dimes}\nNickels: ${change.nickels}\nPennies: ${change.pennies}`);
}

// EXAMPLE INPUT/OUTPUT
// INPUT
// generateCoinChange(173)
// OUTPUT
// Dollars: 1
// Quarters: 2
// Dimes: 2
// Nickels: 0
// Pennies: 3

function generateWithWhile(cents){
    var change = { // let's switch things up! let's put all this info in an object!
        dollars: 0,
        quarters: 0,
        dimes: 0,
        nickels: 0,
        pennies: 0
    }

    while(cents >= 100){
        cents -= 100;
        change.dollars += 1;
    }
    while(cents >= 25){
        cents -= 25;
        change.quarters += 1;
    }
    while(cents >= 10){
        cents -= 10;
        change.dimes += 1;
    }
    while(cents >= 5){
        cents -= 5;
        change.nickels += 1;
    }
    while(cents >= 1){
        cents -= 1;
        change.pennies += 1;
    }
    console.log(`Dollars: ${change.dollars}\nQuarters: ${change.quarters}\nDimes: ${change.dimes}\nNickels: ${change.nickels}\nPennies: ${change.pennies}`);
}
