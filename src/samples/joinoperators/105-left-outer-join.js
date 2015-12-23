(function() {
    "use strict";

    let categories = ["Beverages", "Condiments", "Vegetables", "Dairy Products", "Seafood"];
    let products = getProductList(); 

    let q = categories.reduce((array, c) => {
        let ps = products.filter(p => c === p.Category);
        
        if(ps.length) {
            ps.forEach(p => 
                array.push({ 
                    category: c, 
                    productName: p.ProductName 
                })
            );
        } else {
            array.push({ 
                category: c, 
                productName: "(No products)"
            });
        }
        
        return array;
    }, []);

    q.forEach(v => console.log(`${v.productName}: ${v.category}`));
})();