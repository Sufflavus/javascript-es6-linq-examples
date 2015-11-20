(function() {
    "use strict";

    var words = ["cherry", "apple", "blueberry"]; 

    var sortedWords = words.slice().sort((w1, w2) => w1.length - w2.length);

    console.log("The sorted list of words (by length):"); 
    sortedWords.forEach(w => console.log(w));
})();
