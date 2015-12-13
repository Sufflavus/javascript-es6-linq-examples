(function() {
    "use strict";

    let words = ["cherry", "apple", "blueberry"];
    
    let longestLength = Math.max.apply(null, words.map(w => w.length)); 

    console.log(`The longest word is ${longestLength} characters long.`);
})();