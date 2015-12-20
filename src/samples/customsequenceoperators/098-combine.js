(function() {
    "use strict";

    let vectorA = [0, 2, 4, 5, 6]; 
    let vectorB = [1, 3, 5, 7, 8]; 
     
    let dotProduct = vectorA
        .map((a, index) => a * vectorB[index])
        .reduce((sum, number) => sum + number, 0); 
     
    console.log(`Dot product: ${dotProduct}`); 
})();