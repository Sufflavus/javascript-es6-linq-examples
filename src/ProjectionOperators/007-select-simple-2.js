(function() {
    var products = getProductList(); // function getProductList is in the file datacontext.js     

    console.log("Product Names:");
    
    var result = products.map(p => p.ProductName);

    result.forEach(function(item) {
        console.log(item);
    });
})();
