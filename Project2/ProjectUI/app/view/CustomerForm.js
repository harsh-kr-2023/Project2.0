// app/view/CustomerForm.js
Ext.define('ProjectUI.view.CustomerForm', {
    extend: 'Ext.window.Window',
    xtype: 'customerform',
    title: 'Customer Form',
    width: 400,
    modal: true,
    items: [
        // Define your form fields here
        {
            xtype: 'textfield',
            fieldLabel: 'Name',
            name: 'name',
            allowBlank: false // Required field
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Email',
            name: 'email',
            vtype: 'email' // Email validation
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Address',
            name: 'address'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Phone',
            name: 'phone'
        }
    ],
    buttons: [
        {
            text: 'Save',
            handler: 'onSaveClick' // Define this handler in your controller
        },
        {
            text: 'Cancel',
            handler: 'onCancelClick' // Define this handler in your controller
        }
        // You can add more buttons for other actions (e.g., Delete)
    ]
});
