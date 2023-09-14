Ext.define('ProjectUI.view.customer.CustomerList', {
    extend: 'Ext.grid.Panel',
    xtype: 'customerlist',

    title: 'Customers',

    viewModel: {
        type: 'customerlist', // ViewModel alias
    },

    bind: {
        store: '{customers}', // Use view model binding for store
    },



    columns: [
        { text: 'CustomerId', dataIndex: 'customerId', flex: 2 },
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Email', dataIndex: 'email', flex: 1 },
        { text: 'Phone', dataIndex: 'phone', flex: 1 },
        { text: 'Address', dataIndex: 'address', flex: 2 },
    ],

    tbar: [
        {
            text: 'Add Customer',
            handler: 'onAddCustomerClick', // Define this in your controller
        },
        {
            text: 'Edit Customer',
            handler: 'onEditCustomerClick', // Define this in your controller
        },
        {
            text: 'Delete Customer',
            handler: 'onDeleteCustomerClick', // Define this in your controller
        },
    ],
});