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
            totalUnitsInStock: g.values.reduce((sum, product) => 
                sum + product.UnitsInStock, 0)
        }));

    categories.forEach(p => console.log(`Category=${p.category}  TotalUnitsInStock=${p.totalUnitsInStock}`));
})();