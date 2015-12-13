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
    }, []).map(g => {
        let maxPrice = Math.max.apply(null, g.values.map(p => p.UnitPrice));
        
        return { 
            category: g.key,
            mostExpensiveProducts: g.values.filter(p => p.UnitPrice === maxPrice)
        };
    });

    categories.forEach(g => {
        console.log(`Category=${g.category} MostExpensiveProducts=...`);

        g.mostExpensiveProducts.forEach(p => 
            console.log(`MostExpensiveProducts: ProductID=${p.ProductID} ProductName=${p.ProductName}` + 
                ` Category=${p.Category} UnitPrice=${p.UnitPrice} UnitsInStock=${p.UnitsInStock}`))
    });
})();