(function() {
    "use strict";
    let words = ["cherry", "apple", "blueberry"]; 

    let sortedWords = words.slice().sort();
    let wordList = Array.from(sortedWords);

    console.log("The sorted word list:");
    wordList.forEach(w => console.log(w));
})();