(function() {
    "use strict";
    
    let words = ["aPPLE", "BlUeBeRrY", "cHeRry"];

    let upperLowerWords = words.map(w => { 
        return { 
            upper: w.toUpperCase(), 
            lower: w.toLowerCase()
        }; 
    });

    upperLowerWords.forEach(({upper, lower}) => console.log(`Uppercase: ${upper}, Lowercase: ${lower}`));
})();
