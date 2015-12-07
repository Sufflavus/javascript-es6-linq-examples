(function() {
    "use strict";

    let products = getProductList();

    let orderGroups = products.filter(p => p.UnitsInStock === 0)
        .reduce((array, p) => {
            let key = p.Category;

            let hasKey = array.some(item => 
                item.key === key ? ((item.values.push(p)), true) : false
            );

            if(!hasKey){
                array.push({key: key, values: [p]});
            }

            return array;
        }, []).map((g, index) => 
            ({ category: g.key, products: g.values })
        );

    orderGroups.forEach(g => {
        console.log(`Category=${g.category} Products=...`);

        g.products.forEach(p => console.log(`Products: ProductID=${p.ProductID} ProductName=${p.ProductName}` + 
            ` Category=${p.Category} UnitPrice=${p.UnitPrice} UnitsInStock=${p.UnitsInStock}`));
    });
})();