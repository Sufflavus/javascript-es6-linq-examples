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
    }, []).map((g, index) => ({ 
            category: g.key, 
            averagePrice: g.values.reduce((sum, product) => 
                sum + product.UnitPrice, 0) / g.values.length
        }));

    categories.forEach(p => console.log(`Category=${p.category}  AveragePrice=${p.averagePrice}`));
})();