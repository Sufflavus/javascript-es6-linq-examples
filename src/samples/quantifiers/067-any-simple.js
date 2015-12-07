(function() {
    "use strict";

    let words = ["believe", "relief", "receipt", "field"];
    
    let iAfterE = words.some(w => w.includes("ei")); 

    console.log(`There is a word that contains in the list that contains 'ei': ${iAfterE}`);
})();