(function() {
    "use strict";

    let categories = ["Beverages", "Condiments", "Vegetables", "Dairy Products", "Seafood"];
    let products = getProductList(); 

    let q = categories.reduce((array, c) => {
        products.filter(p => c === p.Category).forEach(p => 
            array.push({ 
                category: c, 
                productName: p.ProductName 
            })
        );

        return array;
    }, []);

    q.forEach(v => console.log(`${v.productName}: ${v.category}`));
})();