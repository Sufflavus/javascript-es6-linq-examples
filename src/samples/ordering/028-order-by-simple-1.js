(function() {
    "use strict";

    let words = ["cherry", "apple", "blueberry"]; 

    let sortedWords = words.slice().sort();

    console.log("The sorted list of words:"); 
    sortedWords.forEach(w => console.log(w));
})();
