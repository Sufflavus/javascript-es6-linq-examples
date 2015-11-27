(function() {
    "use strict";
    
    let factorsOf300 = [2, 2, 3, 5, 5]; 

    let uniqueFactors = Array.from(new Set(factorsOf300));

    console.log("Prime factors of 300:");
    uniqueFactors.forEach(f => console.log(f));
})();