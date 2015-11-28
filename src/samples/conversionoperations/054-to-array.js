(function() {
    "use strict";
    
    let doubles = [1.7, 2.3, 1.9, 4.1, 2.9]; 

    let sortedDoubles = doubles.slice().sort((d1, d2) => {
        if (d1 > d2) {
            return -1;
        } 
        if (d1 < d2) { 
            return 1;
        }
        
        return d1 - d2;
    });

    let doublesArray = Array.from(sortedDoubles);

    console.log("Every other double from highest to lowest:");
    
    for (let d = 0, length = doublesArray.length; d < length; d += 2) 
    { 
        console.log(doublesArray[d]); 
    } 
})();