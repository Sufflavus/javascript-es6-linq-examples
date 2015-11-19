(function() {
    "use strict";

    let customers = getCustomerList(); 

    let first3WAOrders = 
        customers
            .filter(customer => customer.Region === "WA")
            .map(customer => {
                return customer.Orders.map(function(order) {
                        return {
                            customerId: customer.CustomerId, 
                            orderId: order.OrderId,
                            orderDate: order.OrderDate
                        };
                    });
            }).reduce((arr1, arr2) => arr1.concat(arr2), [])
            .slice(0, 3);

    console.log("First 3 orders in WA:"); 

    first3WAOrders.forEach(order => console.log(`CustomerID=${order.customerId} OrderID=${order.orderId} OrderDate=${order.orderDate}`));    
})();
