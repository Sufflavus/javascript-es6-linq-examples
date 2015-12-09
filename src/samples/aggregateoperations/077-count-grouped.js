(function() {
    "use strict";

    let products = getProductList();
    
    let categoryCounts = products.reduce((array, p) => {
        let key = p.Category;

        let hasKey = array.some(item => 
            item.key === key ? ((item.values.push(p)), true) : false
        );

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).map((g, index) => ({ category: g.key, productCount: g.values.length }));

    categoryCounts.forEach(p => console.log(`Category=${p.category}  ProductCount=${p.productCount}`));
})();