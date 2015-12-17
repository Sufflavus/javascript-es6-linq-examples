(function() {
    "use strict";

    let wordsA = ["cherry", "apple", "blueberry"]; 
    let wordsB = ["cherry", "apple", "blueberry"]; 

    let match = wordsA.length === wordsB.length && 
        wordsA.every((w, index) => w === wordsB[index]);

    console.log(`The sequences match: ${match}`);
})();