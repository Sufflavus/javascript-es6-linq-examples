(function() {
    "use strict";

    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let numberGroups = numbers.reduce((array, n) => {
        let key = n % 5;

        let hasKey = array.some(item => 
            item.key === key ? ((item.values.push(n)), true) : false
        );

        if(!hasKey){
            array.push({key: key, values: [n]});
        }

        return array;
    }, []).map((g, index) => 
        ({ remainder: g.key, numbers: g.values })
    );

    numberGroups.forEach(g => {
        console.log(`Numbers with a remainder of ${g.remainder} when divided by 5:`);
        g.numbers.forEach(n => console.log(n));
    });
})();