(function() {
    "use strict";
    
    var numbersA = [0, 2, 4, 5, 6, 8, 9]; 
    var numbersB = [1, 3, 5, 7, 8]; 
    
    var pairs = numbersA.map(a => {
        return numbersB.filter(b => a < b)
            .map(b => {
                return {
                    a: a, 
                    b: b
                };
            });
    }).reduce((arr1, arr2) => arr1.concat(arr2));

    console.log("Pairs where a < b:");

    pairs.forEach(pair => console.log(`${pair.a} is less than ${pair.b}`));

})();
