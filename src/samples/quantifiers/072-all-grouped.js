(function() {
    "use strict";

    let products = getProductList();

    let productGroups = products.reduce((array, p) => {
        let key = p.Category;

        let hasKey = array.some(item => 
            item.key === key ? ((item.values.push(p)), true) : false
        );

        if(!hasKey){
            array.push({key: key, values: [p]});
        }

        return array;
    }, []).filter(g => {
        return g.values.every(p => p.UnitsInStock > 0);
    }).map((g, index) => 
        ({ category: g.key, products: g.values })
    );

    productGroups.forEach(g => {
        console.log(`Category=${g.category} Products=...`);

        g.products.forEach(p => console.log(`Products: ProductID=${p.ProductID} ProductName=${p.ProductName}` + 
            ` Category=${p.Category} UnitPrice=${p.UnitPrice} UnitsInStock=${p.UnitsInStock}`));
    });
})();