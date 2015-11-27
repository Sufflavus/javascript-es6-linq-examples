(function() {
    "use strict";

    let numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    let numbersB = [1, 3, 5, 7, 8]; 

    let uniqueNumbers = new Set([...numbersA, ...numbersB]);

    console.log("Unique numbers from both arrays:");
    uniqueNumbers.forEach(n => console.log(n));
})();