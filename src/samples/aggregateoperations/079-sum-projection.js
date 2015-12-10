(function() {
    "use strict";

    let words = ["cherry", "apple", "blueberry"];
    
    let totalChars = words.reduce((sum, word) => sum + word.length, 0); 

    console.log(`There are a total of ${totalChars} characters in these words.`);
})();