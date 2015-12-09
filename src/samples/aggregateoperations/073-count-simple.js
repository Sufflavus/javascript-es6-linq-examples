(function() {
    "use strict";

    let factorsOf300 = [2, 2, 3, 5, 5];

    let uniqueFactors = factorsOf300.filter((f, index, array) => 
        array.indexOf(f) === index).length; 

    console.log(`There are ${uniqueFactors} unique factors of 300.`);
})();