(function() {
    "use strict";

    let words = ["cherry", "apple", "blueberry"];
    
    let averageLength = words.reduce((sum, word) => sum + word.length, 0) / words.length; 

    console.log(`The average word length is ${averageLength} characters.`);
})();