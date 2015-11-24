(function() {
    "use strict";

    let words = ["blueberry", "chimpanzee", "abacus", "banana", "apple", "cheese"];

    let wordGroups = words.reduce((array, w) => {
        let key = w[0];

        let hasKey = array.some(item => 
            item.key !== key ? false : ((item.values.push(w)), true)
        );

        if(!hasKey){
            array.push({key: key, values: [w]});
        }

        return array;
    }, []).map((g, index) => 
        ({ firstLetter : g.key, words: g.values })
    );

    wordGroups.forEach(g => {
        console.log(`Words that start with the letter '${g.firstLetter}':`);
        g.words.forEach(w => console.log(w));
    });
})();