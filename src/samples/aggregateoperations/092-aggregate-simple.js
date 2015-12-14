(function() {
    "use strict";

    let doubles = [1.7, 2.3, 1.9, 4.1, 2.9];
    
    let product = doubles.reduce((runningProduct, nextFactor) => runningProduct * nextFactor, 1); 

    console.log(`Total product of all numbers: ${product}`);
})();