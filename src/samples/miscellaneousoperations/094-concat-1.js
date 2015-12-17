(function() {
    "use strict";

    let numbersA = [0, 2, 4, 5, 6, 8, 9];
    let numbersB = [1, 3, 5, 7, 8];
    
    let allNumbers = numbersA.concat(numbersB);
    
    console.log("All numbers from both arrays:");
    allNumbers.forEach(n => console.log(n));
})();