(function() {
    "use strict";
    
    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let numsInPlace = numbers.map((num, index) => {
        return { 
            num: num, 
            inPlace: (num === index)
        };
    }); 

    console.log("Number: In-place?");
    numsInPlace.forEach(item => console.log(`${item.num}: ${item.inPlace}`));
})();
