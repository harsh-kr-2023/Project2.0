// app/view/SearchScreen.js
Ext.define('ProjectUI.view.SearchScreen', {
    extend: 'Ext.panel.Panel',
    xtype: 'searchscreen',

    title: 'Customer Search',

    items: [
        {
            xtype: 'textfield',
            fieldLabel: 'Search by Name',
            labelAlign: 'top', // Adjust the label alignment as needed
            reference: 'searchField',
            emptyText: 'Enter customer name...',
            width: 300,
            margin: '10 0 10 10', // Adjust margins as needed
            listeners: {
                change: 'onSearchFieldChange' // Define this handler in your controller
            }
        },
        {
            xtype: 'grid',
            reference: 'customerGrid',
            store: 'customerstore', // Assuming you have a store named 'customerstore'
            columns: [
                { text: 'Customer ID', dataIndex: 'customerid', flex: 1 },
                { text: 'Name', dataIndex: 'name', flex: 2 },
                { text: 'Email', dataIndex: 'email', flex: 2 },
                { text: 'Address', dataIndex: 'address', flex: 3 },
                { text: 'Phone', dataIndex: 'phone', flex: 2 },
            ],
            dockedItems: [
                {
                    xtype: 'pagingtoolbar',
                    dock: 'bottom',
                    displayInfo: true,
                    store: 'customerstore' // Assuming you have a store named 'customerstore'
                }
            ],
            listeners: {
                itemdblclick: 'onGridItemDoubleClick' // Define this handler in your controller
            }
        }
    ],

    // Add any other components and configurations you need
});
