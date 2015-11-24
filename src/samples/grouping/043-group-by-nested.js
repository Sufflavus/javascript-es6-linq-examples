(function() {
    "use strict";

    let customers = getCustomerList();

    let customerOrderGroups = customers.map(c => {
        return {
            companyName: c.CompanyName, 
            yearGroups: c.Orders.reduce((array, o) => {
                let key = new Date(o.OrderDate).getFullYear();

                let hasKey = array.some(item => 
                    item.key !== key ? false : ((item.values.push(o)), true)
                );

                if(!hasKey){
                    array.push({key: key, values: [o]});
                }

                return array;
            }, []).map(g => {
                return { 
                    year: g.key, 
                    monthGroups: g.values.reduce((array, o) => {
                        let key = new Date(o.OrderDate).getMonth() + 1;

                        let hasKey = array.some(item => 
                            item.key !== key ? false : ((item.values.push(o)), true)
                        );

                        if(!hasKey){
                            array.push({key: key, values: [o]});
                        }

                        return array;
                    }, []).map(g => ({ month: g.key, orders: g.values })
                    )
                };
            })
    }});

    customerOrderGroups.forEach(c => {
        console.log(`CompanyName=${c.companyName} YearGroups=...`);

        c.yearGroups.forEach(y => {
            console.log(`YearGroups: Year=${y.year} MonthGroups=...`);

            y.monthGroups.forEach(m => {
                console.log(`MonthGroups: Month=${m.month} Orders=...`);

                m.orders.forEach(o => {
                    console.log(`Orders: OrderID=${o.OrderId} OrderDate=${o.OrderDate} Total=${o.Total}`);
                });
            });
        });
    });
})();