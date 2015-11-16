(function() {
    var products = getProductList(); 

    var result = products.filter(p => p.unitsInStock === 0);

    console.log("Sold out products:"); 

    result.forEach(function(item) {
        console.log(item.productName + " is sold out!");
    });
})();
