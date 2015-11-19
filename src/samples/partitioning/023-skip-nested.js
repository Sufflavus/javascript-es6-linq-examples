(function() {
    "use strict";

    let customers = getCustomerList(); 

    let allButFirst2Orders = 
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
            .slice(2);

    console.log("All but first 2 orders in WA:"); 

    allButFirst2Orders.forEach(order => console.log(`CustomerID=${order.customerId} OrderID=${order.orderId} OrderDate=${order.orderDate}`));    
})();
