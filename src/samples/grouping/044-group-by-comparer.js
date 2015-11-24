(function() {
    "use strict";

    let anagrams = ["from   ", " salt", " earn ", "  last   ", " near ", " form  "];

    let anagramGroups = anagrams.map(w => w.replace(/^\s+|\s+$/g, '')).reduce((array, w) => {
        let key = w;

        let hasKey = array.some(item => 
            anagramEqualityComparer(item.key, key) ? ((item.values.push(w)), true) : false
        );

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map(g => 
       ({ word: g.key, anagrams: g.values })
    );

    anagramGroups.forEach(g => {
        console.log("...");
        g.anagrams.forEach(a => console.log(a));
    });

    function anagramEqualityComparer(x, y) {
        return getCanonicalString(x) === getCanonicalString(y);

        function getCanonicalString(word) {
            let wordChars = word.split(""); 
            wordChars.sort(); 
            return wordChars.join(""); 
        }
    }
})();