Ext.define('ProjectUI.view.rentaldetails.RentalDetailsList', {
    extend: 'Ext.grid.Panel',
    xtype: 'rentaldetailslist',

    title: 'Rental Details',

    viewModel: {
        type: 'rentaldetails', // ViewModel alias
    },

    bind: {
        store: '{rentaldetails}', // Use view model binding for store
    },

    columns: [
        { text: 'Rental Detail Id', dataIndex: 'rentalDetailId', flex: 2 },
        { text: 'Customer Id', dataIndex: 'customerId', flex: 2 },
        { text: 'Movie Id', dataIndex: 'movieId', flex: 2 },
        { text: 'Rental Date', dataIndex: 'rentalDate', flex: 1, xtype: 'datecolumn', format: 'Y-m-d H:i:s' },
        { text: 'Return Date', dataIndex: 'returnDate', flex: 1, xtype: 'datecolumn', format: 'Y-m-d H:i:s' },
        { text: 'Rental Price', dataIndex: 'rentalPrice', flex: 1 },
        // You can add more columns as needed
    ],

    // Add any additional configurations or toolbar buttons here
    tbar: [
        {
            text: 'Add Rental',
            handler: 'onAddRentalClick', // Define this in your rental controller
        },
        {
            text: 'Edit Rental',
            handler: 'onEditRentalClick', // Define this in your rental controller
        },
        {
            text: 'Delete Rental',
            handler: 'onDeleteRentalClick', // Define this in your rental controller
        },
    ],
});
