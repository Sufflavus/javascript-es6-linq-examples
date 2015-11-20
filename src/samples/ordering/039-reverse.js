(function() {
    "use strict";

    let digits = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"]; 

    let reversedIDigits = digits.filter(d => d[1] === "i").reverse();

    console.log("A backwards list of the digits with a second character of 'i':");
    reversedIDigits.forEach(d => console.log(d));
})();
