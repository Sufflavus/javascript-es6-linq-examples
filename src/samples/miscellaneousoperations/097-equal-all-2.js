(function() {
    "use strict";

    let wordsA = ["cherry", "apple", "blueberry"]; 
    let wordsB = ["apple", "blueberry", "cherry"];

    let match = wordsA.length === wordsB.length && 
        wordsA.every((w, index) => w === wordsB[index]);

    console.log(`The sequences match: ${match}`);
})();