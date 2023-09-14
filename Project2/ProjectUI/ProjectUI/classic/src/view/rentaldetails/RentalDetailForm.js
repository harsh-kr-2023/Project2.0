Ext.define('ProjectUI.view.rentaldetail.RentalDetailForm', {
    extend: 'Ext.form.Panel',
    xtype: 'rentaldetailform',

    title: 'Rental Detail',

    items: [
        {
            xtype: 'textfield',
            name: 'rentalDetailId',
            fieldLabel: 'Rental Detail ID',
            readOnly: true // Assuming rental detail ID should not be editable
        },
        {
            xtype: 'textfield',
            name: 'customerId',
            fieldLabel: 'Customer ID',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'movieId',
            fieldLabel: 'Movie ID',
            allowBlank: false
        },
        {
            xtype: 'datefield',
            name: 'rentalDate',
            fieldLabel: 'Rental Date',
            allowBlank: false,
            format: 'Y-m-d'
        },
        {
            xtype: 'datefield',
            name: 'returnDate',
            fieldLabel: 'Return Date',
            allowBlank: false,
            format: 'Y-m-d'
        },
        {
            xtype: 'numberfield',
            name: 'rentalPrice',
            fieldLabel: 'Rental Price',
            allowBlank: false
        }
    ],

    buttons: [
        {
            text: 'Save',
            formBind: true,
            handler: 'onSaveRentalDetailClick' // Define this handler in your RentalDetailController
        },
        {
            text: 'Cancel',
            handler: 'onCancelRentalDetailClick' // Define this handler in your RentalDetailController
        }
    ]
});
