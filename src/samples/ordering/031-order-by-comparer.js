(function() {
    "use strict";

    let words = ["aPPLE", "AbAcUs", "bRaNcH", "BlUeBeRrY", "ClOvEr", "cHeRry"]; 

    let sortedWords = words.slice().sort(caseInsensitiveComparer);

    sortedWords.forEach(w => console.log(w));

    function caseInsensitiveComparer(x, y) {
        if (x.toUpperCase() < y.toUpperCase()) {
            return -1;
        }
        if (x.toUpperCase() > y.toUpperCase()) {
            return 1;
        }
        return 0;
    }
})();
