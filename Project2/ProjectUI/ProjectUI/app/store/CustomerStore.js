Ext.define('ProjectUI.store.CustomerStore', {
    extend: 'Ext.data.Store',
    alias: 'store.customers',

    model: 'ProjectUI.model.Customer',

    proxy: {
        type: 'rest',
        url: 'https://localhost:7032/api/Customers', // Use the correct API endpoint
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
    },

    // Set autoLoad to false to load data manually
    autoLoad: true,
});