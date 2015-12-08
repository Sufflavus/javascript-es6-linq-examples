(function() {
    "use strict";

    let numbers = [1, 11, 3, 19, 41, 65, 19];
    
    let onlyOdd = numbers.every(n => n % 2 === 1); 

    console.log(`The list contains only odd numbers: ${onlyOdd}`);
})();