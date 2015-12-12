(function() {
    "use strict";

    let products = getProductList();
    
    let categories = products.reduce((array, p) => {
        let key = p.Category;

        let hasKey = array.some(item => 
            item.key === key ? ((item.values.push(p)), true) : false
        );

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map(g => ({ 
        category: g.key, 
        cheapestPrice: Math.min.apply(null, g.values.map(p => p.UnitPrice))
    }));

    categories.forEach(p => console.log(`Category=${p.category}  CheapestPrice=${p.cheapestPrice}`));
})();