(function() {
    "use strict";

    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    let numSum = numbers.reduce((sum, number) => sum + number, 0); 

    console.log(`The sum of the numbers is ${numSum}.`);
})();