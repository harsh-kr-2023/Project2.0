Ext.define('ProjectUI.viewmodel.CustomerList', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerlist',

    stores: {
        customers: {
            type: 'customers',
            model: 'ProjectUI.model.Customer',
            autoLoad: true, // Load data from the backend when the store is created
            proxy: {
                type: 'rest',
                url: 'https://localhost:7032/api/Customers', // Use the correct API endpoint
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                },
            },
        },
    },
});