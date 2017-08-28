"use strict";

/**
 * Verifies if the number is divisible by a divider
 * or the number contains the divider.
 * 
 * @param int number 
 * @param int divider 
 */
function isDivisibleOrContains(number, divider) {
    return (number % divider === 0 
        || number.toString().indexOf(divider) !== -1 );
}

/**
 * Transforms an array of numbers to an array of strings
 * following some rules.
 * 
 * @param array numbers 
 */
function numbersToStrings(numbers) {
    var strings = numbers.map((number) => {
        var string = "";

        if (isDivisibleOrContains(number, 3)) {
            string += "Fizz";
        }
    
        if (isDivisibleOrContains(number, 5)) {
            string += "Buzz";
        }
        
        return string;
    });

    return strings;
}
/**
 * Main
 */
(() => {
    var numbers = [1,3,4,5,6,8,9,10,12,15,16,18,20,21,24,25,27,28,30,32,33,35,36,39,40,42,44,45,48,50];
    
    var strings = numbersToStrings(numbers);    

    console.log(strings);
})();