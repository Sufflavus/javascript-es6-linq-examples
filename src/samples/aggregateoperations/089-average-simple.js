(function() {
    "use strict";

    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    let averageNum = numbers.reduce((sum, number) => sum + number, 0) / numbers.length; 

    console.log(`The average number is ${averageNum}.`);
})();