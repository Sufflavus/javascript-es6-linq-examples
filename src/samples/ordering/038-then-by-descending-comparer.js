(function() {
    "use strict";

    let words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    let sortedWords = words.slice().sort((a1, a2) => {
        if (a1.length > a2.length) {
            return 1;
        } 
        if (a1.length < a2.length) { 
            return -1;
        }

        return caseInsensitiveComparer(a1, a2);
    });

    sortedWords.forEach(w => console.log(w));

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return 1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return -1;
        }
        return 0;
    }
})();
