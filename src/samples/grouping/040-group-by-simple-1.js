(function() {
    "use strict";

    let numbers = [5, 4, 1, 3, 9, 8, 6, 7, 2, 0]; 

    let numberGroups = numbers.reduce((array, item) => {
        let key = item % 5;

        let hasKey = array.some(n => 
            n.key !== key ? false : ((n.values.push(item)), true)
        );

        if(!hasKey){
            array.push({key: key, values: [item]});
        }

        return array;
    }, []).map((g, index) => 
        ({remainder: g.key, numbers: g.values })
    );

    numberGroups.forEach(g => {
        console.log(`Numbers with a remainder of ${g.remainder} when divided by 5:`);
        g.numbers.forEach(n => console.log(n));
    });
})();