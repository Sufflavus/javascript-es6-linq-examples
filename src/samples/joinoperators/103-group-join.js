(function() {
    "use strict";

    let categories = ["Beverages", "Condiments", "Vegetables", "Dairy Products", "Seafood"];
    let products = getProductList(); 

    let q = categories.reduce((array, c) => {
        let ps = products.filter(p => c === p.Category);

        array.push({ 
            category: c, 
            products: ps
        });

        return array;
    }, []);
    
    q.forEach(v => {
        console.log(`${v.category}:`); 
        v.products.forEach(p => console.log(`   ${p.ProductName}`));
    });
})();