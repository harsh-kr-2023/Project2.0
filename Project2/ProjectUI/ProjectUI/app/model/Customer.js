Ext.define('ProjectUI.model.Customer', {
    extend: 'ProjectUI.model.Base',
    idProperty: 'CustomerId',
    fields: [
        { name: 'customerId', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'email', type: 'string' },
        { name: 'phone', type: 'string' },
        { name: 'address', type: 'string' }
    ]
});