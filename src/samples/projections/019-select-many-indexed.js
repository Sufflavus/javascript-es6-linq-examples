(function() {    
    "use strict";
    
    var customers = getCustomerList(); // function getCustomerList is in the file datacontext.js

    let orders = customers.map((customer, customerIndex) => {
        return customer.Orders.map(order => `Customer #${customerIndex + 1} has an order with OrderID ${order.OrderId}`);
    }).reduce((arr1, arr2) => arr1.concat(arr2));

    orders.forEach(order => console.log(order));
})();
