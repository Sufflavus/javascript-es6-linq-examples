(function() {
    "use strict";

    let words = ["cherry", "apple", "blueberry"];
    
    let shortestWord = Math.min.apply(null, words.map(w => w.length)); 

    console.log(`The shortest word is ${shortestWord} characters long.`);
})();