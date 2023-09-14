Ext.define('ProjectUI.viewmodel.RentalDetailsViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.rentaldetails',

    stores: {
        rentaldetails: {
            model: 'ProjectUI.model.RentalDetails',
            autoLoad: true, // Load data from the backend when the store is created
            proxy: {
                type: 'rest',
                url: 'https://localhost:7032/api/RentalDetails', // Use the correct API endpoint
                reader: {
                    type: 'json',
                    rootProperty: 'data',
                },
            },
        },
    },
});
