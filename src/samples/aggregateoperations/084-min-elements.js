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
        let minPrice = Math.min.apply(null, g.values.map(p => p.UnitPrice));
        
        return { 
            category: g.key,
            cheapestProducts: g.values.filter(p => p.UnitPrice === minPrice)
        };
    });

    categories.forEach(g => {
        console.log(`Category=${g.category} CheapestProducts=...`);

        g.cheapestProducts.forEach(p => 
            console.log(`CheapestProducts: ProductID=${p.ProductID} ProductName=${p.ProductName}` + 
                ` Category=${p.Category} UnitPrice=${p.UnitPrice} UnitsInStock=${p.UnitsInStock}`))
    });
})();