Ext.define('ProjectUI.view.customer.CustomerForm', {
    extend: 'Ext.form.Panel', // Use 'Ext.form.Panel' as the base class for a form

    xtype: 'customerform', // You can use this xtype to create instances of this view

    title: 'Customer Details', // Set a title for the form panel

    // Define the form fields and their configurations
    items: [{
        xtype: 'textfield',
        name: 'name',
        fieldLabel: 'Name',
        allowBlank: false // Example validation configuration
    }, {
        xtype: 'textfield',
        name: 'email',
        fieldLabel: 'Email'
    }, {
        xtype: 'textfield',
        name: 'phone',
        fieldLabel: 'Phone'
    }, {
        xtype: 'textfield',
        name: 'address',
        fieldLabel: 'Address'
    }],
});