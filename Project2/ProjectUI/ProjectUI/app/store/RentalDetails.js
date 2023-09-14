Ext.define('ProjectUI.store.RentalDetails', {
    extend: 'Ext.data.Store',
    alias: 'store.rentaldetails',

    model: 'ProjectUI.model.RentalDetails',

    proxy: {
        type: 'rest',
        url: 'https://localhost:7032/api/RentalDetails', // Use the correct API endpoint
        reader: {
            type: 'json',
            rootProperty: 'data',
        },
    },

    // Set autoLoad to false to load data manually if needed
    autoLoad: true,
});
