(function() {
    "use strict";

    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0];
    
    let maxNum = Math.max.apply(null, numbers); 

    console.log(`The maximum number is ${maxNum}.`);
})();