Ext.define('ProjectUI.model.Customer', {
    extend: 'ProjectUI.model.Base',

    fields: [
        'customerid', 'name', 'email', 'address', 'phone'
    ],
    proxy: {
        type: 'ajax',
        api: {
            create: 'api/customer/create', // Define your API endpoints here
            read: 'api/customer/read', // Define your API endpoints here
            update: 'api/customer/update', // Define your API endpoints here
            destroy: 'api/customer/delete' // Define your API endpoints here
        },
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json',
            writeAllFields: true
        }
    }
});