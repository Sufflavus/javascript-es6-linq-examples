(function() {
    var products = getCustomerList(); 

    var result = products.filter(c => c.region === "WA");

    console.log("Customers from Washington and their orders:"); 

    result.forEach(function(customer) {
        console.log("Customer " + customer.customerId + ": " + customer.companyName); 
        customer.orders.forEach(function(order) {
            console.log("  Order " + order.orderId + ": " + order.orderDate); 
        });
    });
})();
